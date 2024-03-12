import { IPoint, IRect } from '../../types';

export interface ICanFitToParent {

  fitToParent(rect: IRect, parentRect: IRect, points: IPoint[]): void;
}

