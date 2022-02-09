import EngineStore from '@/engine/EngineStore';
import ViewMover from '@/model/canvas/ViewMover';
import Renderer from '@/model/Renderer';
import { isRectShape } from '@/model/Shape';
import View from '@/model/View';
import { Mesh, MeshBuilder, Space, Axis, StandardMaterial } from 'babylonjs';
import { Application } from 'pixi.js';
import MaterialStore from './MaterialStore';

class PixieRenderer implements Renderer {
  app: Application;

  private engineStore: EngineStore;

  private materialStore: MaterialStore;

  private meshes: Map<View, Mesh> = new Map();

  ground: Mesh | null = null;

  constructor(engineStore: EngineStore, materialStore: MaterialStore) {
    this.engineStore = engineStore;
    this.materialStore = materialStore;
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
      mesh.material = this.materialStore.blue1;
      mesh.translate(Axis.Z, -1, Space.WORLD);
      mesh.translate(Axis.X, shape.center.x, Space.WORLD);
      mesh.translate(Axis.Y, shape.center.y, Space.WORLD);
      return mesh;
    }

    throw new Error('Shape not found: ' + shape);
  }
}

export default PixieRenderer;
