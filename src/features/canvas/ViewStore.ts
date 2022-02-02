import Renderer from '@/model/Renderer';
import View from '@/model/View';

export default class ViewStore {
  views: View[] = [];

  private renderer: Renderer | undefined;

  addView(view: View): void {
    this.views.push(view);
    this.renderer?.addView(view);
  }

  setRenderer(renderer: Renderer) {
    this.renderer = renderer;
    this.views.forEach((view) => renderer.addView(view));
  }
}
