import { IPoint, IRect } from '../../types';

export interface ICanOneToOneCentering {

  oneToOneCentering(rect: IRect, parentRect: IRect, points: IPoint[]): void;
}
