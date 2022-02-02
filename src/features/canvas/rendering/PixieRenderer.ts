import Renderer from '@/model/Renderer';
import { isRectShape } from '@/model/Shape';
import View from '@/model/View';
import { Application, Graphics } from 'pixi.js';

export class PixieRenderer implements Renderer {
  app: Application;

  private graphics: Map<View, Graphics> = new Map();

  constructor() {
    this.app = new Application({ width: 640, height: 360 });
  }

  addView(view: View): void {
    const graphics = this.createGraphics(view);
    this.app.stage.addChild(graphics);
    this.graphics.set(view, graphics);
  }

  private createGraphics(view: View): Graphics {
    const shape = view.shape;
    if (isRectShape(shape)) {
      const graphics = new Graphics();
      graphics.beginFill(0xff0000);
      graphics.drawRect(shape.rect.x, shape.rect.y, shape.rect.width, shape.rect.height);
      return graphics;
    }

    throw new Error('Shape not found: ' + shape);
  }
}
