import Point from '@/features/algorithms/visibility_2d/Point';
import Rectangle from '@/features/algorithms/visibility_2d/Rectangle';
import Shape from './Shape';
import ShapeType from './ShapeType';

class RectShape extends Shape {
  readonly center;

  readonly size;

  constructor(center: Point, size: number) {
    super([center], ShapeType.Rectangle);

    this.center = center;
    this.size = size;
  }
}

export default RectShape;
