import { IPoint } from './i-point';

export type PointInput = IPoint | null | undefined;

export class PointExtensions {

  public static castToPoint(value: PointInput): IPoint {
    return value || PointExtensions.initialize();
  }

  public static initialize(x: number = 0, y: number = 0): IPoint {
    return { x: x, y: y };
  }

  public static copy(point: IPoint): IPoint {
    return PointExtensions.initialize(point.x, point.y);
  }

  public static isEqual(point1: IPoint, point2: IPoint): boolean {
    return point1.x === point2.x && point1.y === point2.y;
  }

  public static sum(point1: IPoint, point2: IPoint): IPoint {
    return { x: (point1.x + point2.x), y: (point1.y + point2.y) };
  }

  public static sub(point1: IPoint, point2: IPoint): IPoint {
    return { x: (point1.x - point2.x), y: (point1.y - point2.y) };
  }

  public static div(point: IPoint, value: number): IPoint {
    return { x: (point.x / value), y: (point.y / value) };
  }

  public static mult(point: IPoint, value: number): IPoint {
    return { x: (point.x * value), y: (point.y * value) };
  }

  public static roundTo(point: IPoint, size: number): IPoint {
    const xCount = Math.trunc(point.x / size);
    const yCount = Math.trunc(point.y / size);
    return { x: xCount * size, y: yCount * size };
  }

  public static hypotenuse(point1: IPoint, point2: IPoint): number {
    const a = (point2.x - point1.x);
    const b = (point2.y - point1.y);
    return Math.abs(Math.sqrt( a * a + b * b));
  }

  public static matrixTransform(point: IPoint, element: SVGSVGElement): IPoint {

    let result: IPoint = PointExtensions.initialize(point.x, point.y);

    let matrix = element.getScreenCTM();
    if (matrix) {
      const svgPoint = element.createSVGPoint();
      svgPoint.x = point.x;
      svgPoint.y = point.y;
      result = svgPoint.matrixTransform(matrix.inverse());
    }
    return result;
  }
}
