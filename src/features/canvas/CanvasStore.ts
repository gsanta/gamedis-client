import Shape from '@/model/Shape';
import { drawScene } from '../algorithms/visibility_2d/drawScene';
import Point from '../algorithms/visibility_2d/Point';
import Rectangle from '../algorithms/visibility_2d/Rectangle';
import Segment from '../algorithms/visibility_2d/Segment';
import { calculateVisibility } from '../algorithms/visibility_2d/visibility';
import { loadMap } from './loadMap';

const room = new Rectangle(0, 0, 700, 500);
const walls = [
  new Segment(20, 20, 20, 120),
  new Segment(20, 20, 100, 20),
  new Segment(100, 20, 150, 100),
  new Segment(150, 100, 50, 100),
];
const blocks = [new Rectangle(50, 150, 20, 20), new Rectangle(150, 150, 40, 80), new Rectangle(400, 400, 40, 40)];

export default class CanvasStore {
  shapes: Shape[] = [];

  private _mousePosition: Point = new Point(100, 100);

  private ctx: CanvasRenderingContext2D | undefined;

  get mousePosition(): Point {
    return this._mousePosition;
  }

  setCtx(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  update() {
    if (this.ctx) {
      const endpoints = loadMap(room, blocks, walls, this._mousePosition);
      const visibility = calculateVisibility(this._mousePosition, endpoints);
      requestAnimationFrame(() => drawScene(this.ctx!, this._mousePosition, blocks, walls, visibility));
    }
  }

  setMousePosition(mousePosition: Point) {
    this._mousePosition = mousePosition;
    this.update();
  }
}
