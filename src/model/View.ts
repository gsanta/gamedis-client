import Shape from './Shape';

class View {
  readonly shape: Shape;

  constructor(shape: Shape) {
    this.shape = shape;
  }
}

export default View;
