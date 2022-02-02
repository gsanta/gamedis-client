import View from './View';

interface Renderer {
  addView(view: View): void;
}

export default Renderer;
