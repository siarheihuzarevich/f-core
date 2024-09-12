import { EOperationSystem } from './e-operation-system';

/**
 * @deprecated This class is deprecated and will be removed in future versions.
 */
export class MouseEventExtensions {

  public static isContextMenuEvent(event: MouseEvent): boolean {
    return event.type === 'contextmenu'
  }

  public static isMouseMiddleButtonClickEvent(event: MouseEvent): boolean {
    return event.type === 'auxclick' && event.button === 1;
  }

  public static isClickEvent(event: MouseEvent): boolean {
    return event.type === 'click';
  }

  public static isCtrlPressed(event: MouseEvent): boolean {
    return event.ctrlKey || event.metaKey;
  }

  public static isShiftPressed(event: { shiftKey: boolean }): boolean {
    return event.shiftKey;
  }

  public static fakeEvent(): IFakeMouseEvent {
    return {
      shiftKey: false, ctrlKey: false, metaKey: false, altKey: false,
      preventDefault: () => {
      }
    } as IFakeMouseEvent;
  }

  public static fakeCommandEvent(): IFakeMouseEvent {
    return {
      shiftKey: false, ctrlKey: false, metaKey: true, altKey: false,
      type: 'click',
      preventDefault: () => {
      }
    } as IFakeMouseEvent;
  }

  public static isCommandButton(platform: EOperationSystem, event: { metaKey: boolean, ctrlKey: boolean }): boolean {
    return platform === EOperationSystem.MAC_OS ? event.metaKey : event.ctrlKey;
  }
}

export interface IFakeMouseEvent extends MouseEvent {

  metaKey: boolean;
}
