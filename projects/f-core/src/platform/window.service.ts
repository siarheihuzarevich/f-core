import { Injectable, NgZone, OnDestroy, Optional, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { PlatformService } from './platform.service';
import { IPoint, IRect, ISize, PointExtensions, RectExtensions, SizeExtensions } from '../types';

export const DEFAULT_RESIZE_TIME = 20;

@Injectable({ providedIn: 'root' })
export class WindowService implements OnDestroy {

  private viewportSize: ISize | null = null;

  private readonly _change = new Subject<Event>();

  private _changeListener = (event: Event) => {
    this._change.next(event);
  };

  protected _document: Document;

  constructor(
    private platform: PlatformService,
    ngZone: NgZone,
    @Optional() @Inject(DOCUMENT) document: any,
  ) {
    this._document = document;
    this.initialize(ngZone);
  }

  private initialize(ngZone: NgZone): void {
    ngZone.runOutsideAngular(() => {
      if (this.platform.isBrowser) {
        const window = this.getWindow();

        window.addEventListener('resize', this._changeListener);
        window.addEventListener('orientationchange', this._changeListener);
      }
      this.change().subscribe(() => (this.viewportSize = null));
    });
  }

  public getViewportSize(): Readonly<ISize> {
    if (!this.viewportSize) {
      this.updateViewportSize();
    }

    const output = { width: this.viewportSize!.width, height: this.viewportSize!.height };

    if (!this.platform.isBrowser) {
      this.viewportSize = null!;
    }

    return output;
  }

  public getViewportRect(): IRect {
    const scrollPosition = this.getViewportScrollPosition();
    const { width, height } = this.getViewportSize();

    return RectExtensions.initialize(
      scrollPosition.x,
      scrollPosition.y,
      width,
      height
    );
  }

  public getViewportScrollPosition(): IPoint {
    if (!this.platform.isBrowser) {
      return PointExtensions.initialize();
    }

    const document = this._document;
    const window = this.getWindow();
    const documentElement = document.documentElement!;
    const documentRect = documentElement.getBoundingClientRect();

    const top =
      -documentRect.top ||
      document.body.scrollTop ||
      window.scrollY ||
      documentElement.scrollTop ||
      0;

    const left =
      -documentRect.left ||
      document.body.scrollLeft ||
      window.scrollX ||
      documentElement.scrollLeft ||
      0;

    return PointExtensions.initialize(left, top);
  }

  public change(throttleTime: number = DEFAULT_RESIZE_TIME): Observable<Event> {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }

  public getWindow(): Window {
    return this._document.defaultView || window;
  }

  private updateViewportSize(): void {
    const window = this.getWindow();
    this.viewportSize = this.platform.isBrowser
      ? SizeExtensions.initialize(window.innerWidth, window.innerHeight)
      : SizeExtensions.initialize();
  }

  public ngOnDestroy(): void {
    if (this.platform.isBrowser) {
      const window = this.getWindow();
      window.removeEventListener('resize', this._changeListener);
      window.removeEventListener('orientationchange', this._changeListener);
    }

    this._change.complete();
  }
}
