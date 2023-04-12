import { IVector } from './i-vector';
import { IPoint, PointExtensions } from '../point';

export class VectorExtensions {

  public static initialize(point1: IPoint = PointExtensions.initialize(), point2: IPoint = PointExtensions.initialize()): IVector {

    return { point1, point2 };
  }

  public static copy(vector: IVector): IVector {
    return { point1: vector.point1, point2: vector.point2 };
  }

  public static hypotenuse(vector: IVector): number {
    return Math.sqrt((vector.point1.x - vector.point2.x) ** 2 + (vector.point1.y - vector.point2.y) ** 2);
  }
}
