import { IPoint } from '../../types';

export interface ICanChangeZoom {

  setZoom(value: number, toPosition: IPoint): void;

  setScalePosition(value: IPoint): void;

  resetZoom(): void;
}
