import EngineStore from '@/engine/EngineStore';
import Point from '@/features/algorithms/visibility_2d/Point';
import Rectangle from '@/features/algorithms/visibility_2d/Rectangle';
import MeshStore from '@/features/canvas/rendering/MeshStore';
import ViewStore from '@/features/canvas/ViewStore';
import { Nullable, Observer, PointerInfo, Vector3 } from 'babylonjs';
import RectShape from '../RectShape';
import View from '../View';
import { Tool, ToolType } from './Tool';

export default class CreateTool implements Tool {
  toolType = ToolType.Create;

  toolName = 'Create Tool';

  private engineStore: EngineStore;

  private viewStore: ViewStore;

  private meshStore: MeshStore;

  private observer: Nullable<Observer<PointerInfo>> | null = null;

  constructor(engineStore: EngineStore, viewStore: ViewStore, meshStore: MeshStore) {
    this.engineStore = engineStore;
    this.viewStore = viewStore;
    this.meshStore = meshStore;
  }

  activate() {
    const { scene } = this.engineStore;

    if (scene) {
      scene.onPointerObservable.add(this.mouseHandler);
    }
  }

  deactivate() {
    const { scene } = this.engineStore;

    if (scene) {
      scene.onPointerObservable.remove(this.observer);
    }
  }

  private mouseHandler = (pointerInfo: PointerInfo) => {
    const { ground } = this.meshStore;
    switch (pointerInfo.type) {
      case BABYLON.PointerEventTypes.POINTERDOWN:
        if (pointerInfo?.pickInfo?.hit && pointerInfo.pickInfo.pickedMesh === ground) {
          if (pointerInfo.pickInfo.pickedPoint) {
            this.pointerDown(pointerInfo.pickInfo.pickedPoint);
          }
        }
        break;
    }
  };

  pointerDown = (point: Vector3) => {
    const center = new Point(point.x, point.y);
    this.viewStore.addView(new View(new RectShape(center, 1)));
  };
}
