import EndPoint from './EndPoint';

export default class Segment {
  public p1: EndPoint;

  public p2: EndPoint;

  public d = 0;

  get isHorizontal() {
    return this.p1.y === this.p2.y;
  }

  get isVertical() {
    return this.p2.x === this.p1.x;
  }

  get length() {
    return Math.sqrt(this.p1.x ** 2 + this.p1.y ** 2);
  }

  get center() {
    return new EndPoint((this.p1.x + this.p2.x) / 2, (this.p1.y + this.p2.y) / 2);
  }

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.p1 = new EndPoint(x1, y1);
    this.p2 = new EndPoint(x2, y2);
    this.p1.segment = this;
    this.p2.segment = this;
  }
}
