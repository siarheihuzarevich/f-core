import { IPoint } from '../../types';

export abstract class IPointerEvent {

  public get originalEvent(): (MouseEvent | TouchEvent) {
    return this.event;
  }

  public get targetElement(): HTMLElement {
    return this.originalEvent.target as HTMLElement;
  }

  protected constructor(private readonly event: (MouseEvent | TouchEvent)) {
    this.event = event;
  }

  public abstract isMouseLeftButton(): boolean;

  public abstract isMouseRightButton(): boolean;

  public preventDefault(): void {
    this.originalEvent.preventDefault();
  }

  public abstract getPosition(): IPoint;

  public get isEventInLockedContext(): boolean {
    return this.targetElement.closest('[fLockedContext]') !== null;
  }
}
