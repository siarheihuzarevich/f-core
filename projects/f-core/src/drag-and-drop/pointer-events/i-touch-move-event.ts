import { IPointerEvent } from './i-pointer-event';
import { IPoint } from '../../types';

export class ITouchMoveEvent extends IPointerEvent {

  constructor(event: TouchEvent, target?: HTMLElement) {
    super(event, target);
  }

  public isMouseLeftButton(): boolean {
    return true;
  }

  public isMouseRightButton(): boolean {
    return false;
  }

  public getPosition(): IPoint {
    return { x: (this.originalEvent as TouchEvent).targetTouches[ 0 ].clientX, y: (this.originalEvent as TouchEvent).targetTouches[ 0 ].clientY };
  }
}
