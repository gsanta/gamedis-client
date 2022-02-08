import { Graphics } from 'pixi.js';

class ViewMover {
  private graphics: Graphics;

  private data: any;

  private dragging = false;

  constructor(graphics: Graphics) {
    this.graphics = graphics;
    this.graphics.interactive = true;
    this.graphics
      .on('mousedown', this.onDragStart)
      .on('touchstart', this.onDragStart)
      // events for drag end
      .on('mouseup', this.onDragEnd)
      .on('mouseupoutside', this.onDragEnd)
      .on('touchend', this.onDragEnd)
      .on('touchendoutside', this.onDragEnd)
      // events for drag move
      .on('mousemove', this.onDragMove)
      .on('touchmove', this.onDragMove);
  }

  private onDragStart = (event: any) => {
    this.data = event.data;
    this.graphics.alpha = 0.5;
    this.dragging = true;
  };

  private onDragEnd = () => {
    this.graphics.alpha = 1;
    this.dragging = false;
    this.data = null;
  };

  private onDragMove = () => {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.graphics.parent);
      this.graphics.position.x = newPosition.x;
      this.graphics.position.y = newPosition.y;
    }
  };
}

export default ViewMover;
