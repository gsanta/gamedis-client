import Rectangle from '@/features/algorithms/visibility_2d/Rectangle';
import Shape from './Shape';
import ShapeType from './ShapeType';

class RectShape extends Shape {
  private _rect: Rectangle;

  constructor(rectangle: Rectangle) {
    super(rectangle.getPoints(), ShapeType.Rectangle);

    this._rect = rectangle;
  }

  get rect() {
    return this._rect;
  }
}

export default RectShape;
