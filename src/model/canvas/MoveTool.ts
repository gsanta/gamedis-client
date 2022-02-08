import EngineStore from '@/engine/EngineStore';
import PixieRenderer from '@/features/canvas/rendering/MeshStore';
import { AbstractMesh, Mesh, Nullable, Observer, PointerInfo, Vector3 } from 'babylonjs';
import { Tool, ToolType } from './Tool';

export default class MoveTool implements Tool {
  toolType = ToolType.Move;

  toolName = 'Move Tool';

  private engineStore: EngineStore;

  private meshStore: PixieRenderer;

  private currentMesh: Mesh | null = null;

  private startingPoint: Vector3 | null = null;

  private observer: Nullable<Observer<PointerInfo>> | null = null;

  constructor(engineStore: EngineStore, meshStore: PixieRenderer) {
    this.engineStore = engineStore;
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
        if (pointerInfo?.pickInfo?.hit && pointerInfo.pickInfo.pickedMesh != ground) {
          this.pointerDown(pointerInfo.pickInfo.pickedMesh);
        }
        break;
      case BABYLON.PointerEventTypes.POINTERUP:
        this.pointerUp();
        break;
      case BABYLON.PointerEventTypes.POINTERMOVE:
        this.pointerMove();
        break;
    }
  };

  pointerDown = (mesh: AbstractMesh | null) => {
    const { camera, canvas } = this.engineStore;

    this.currentMesh = mesh as Mesh;
    this.startingPoint = this.getGroundPosition();
    if (this.startingPoint) {
      setTimeout(() => {
        camera?.detachControl(canvas);
      }, 0);
    }
  };

  private getGroundPosition = (): Nullable<Vector3> => {
    const { scene } = this.engineStore;
    const { ground } = this.meshStore;

    if (scene) {
      const pickinfo = scene.pick(scene.pointerX, scene.pointerY, (mesh) => mesh == ground);
      if (pickinfo?.hit) {
        return pickinfo.pickedPoint;
      }
    }
    return null;
  };

  private pointerUp = (): void => {
    const { canvas, camera } = this.engineStore;

    if (this.startingPoint) {
      camera?.attachControl(canvas, true);
      this.startingPoint = null;
      return;
    }
  };

  private pointerMove = () => {
    if (!this.startingPoint) {
      return;
    }

    const current = this.getGroundPosition();
    if (!current) {
      return;
    }

    const diff = current.subtract(this.startingPoint);
    this.currentMesh?.position.addInPlace(diff);

    this.startingPoint = current;
  };
}
