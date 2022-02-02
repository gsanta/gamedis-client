import Point from '../features/algorithms/visibility_2d/Point';
import RectShape from './RectShape';
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

export const isRectShape = (shape: Shape): shape is RectShape => {
  return shape.type === ShapeType.Rectangle;
};

export default Shape;
