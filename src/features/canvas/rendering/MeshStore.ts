import EngineStore from '@/engine/EngineStore';
import ViewMover from '@/model/canvas/ViewMover';
import Renderer from '@/model/Renderer';
import { isRectShape } from '@/model/Shape';
import View from '@/model/View';
import { Mesh, MeshBuilder, Space, Axis } from 'babylonjs';
import { Application } from 'pixi.js';

class PixieRenderer implements Renderer {
  app: Application;

  private engineStore: EngineStore;

  private meshes: Map<View, Mesh> = new Map();

  ground: Mesh | null = null;

  private movers: Map<Mesh, ViewMover> = new Map();

  constructor(engineStore: EngineStore) {
    this.engineStore = engineStore;
    this.app = new Application({ width: 640, height: 360 });
    this.app.stage.interactive = true;
  }

  getGraphics(view: View) {
    return this.meshes.get(view);
  }

  addView(view: View): void {
    const mesh = this.createMesh(view);

    if (mesh) {
      this.meshes.set(view, mesh);
    }
  }

  private createMesh(view: View): Mesh {
    const shape = view.shape;
    const { scene } = this.engineStore;
    if (isRectShape(shape)) {
      const mesh = MeshBuilder.CreateDisc('disc', { tessellation: 4 }, scene);
      mesh.translate(Axis.Z, 1, Space.WORLD);
      return mesh;
    }

    throw new Error('Shape not found: ' + shape);
  }
}

export default PixieRenderer;
