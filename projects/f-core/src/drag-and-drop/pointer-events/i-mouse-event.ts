import { IPointerEvent } from './i-pointer-event';
import { IPoint } from '../../types';

export class IMouseEvent extends IPointerEvent {

  constructor(event: MouseEvent, target?: HTMLElement) {
    super(event, target);
  }

  public isMouseLeftButton(): boolean {
    return (this.originalEvent as MouseEvent).button === 0;
  }

  public isMouseRightButton(): boolean {
    return (this.originalEvent as MouseEvent).buttons === 2;
  }

  public getPosition(): IPoint {
    return { x: (this.originalEvent as MouseEvent).clientX, y: (this.originalEvent as MouseEvent).clientY };
  }
}
