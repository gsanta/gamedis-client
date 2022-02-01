import Point from '@/features/algorithms/visibility_2d/Point';
import Shape from './Shape';
import ShapeType from './ShapeType';

class RectShape extends Shape {
  constructor(points: Point[]) {
    super(points, ShapeType.Rectangle);
  }
}

export default RectShape;
