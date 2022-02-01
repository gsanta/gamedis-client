import Point from '../features/algorithms/visibility_2d/Point';
import ShapeType from './ShapeType';

class Shape {
  readonly type: ShapeType;

  private _points: Point[];

  constructor(points: Point[], type: ShapeType) {
    this._points = points;
    this.type = type;
  }

  get points(): Point[] {
    return this._points;
  }
}

export default Shape;
