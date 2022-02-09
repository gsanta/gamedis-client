import EngineStore from '@/engine/EngineStore';
import { Color3, StandardMaterial } from 'babylonjs';

export default class MaterialStore {
  blue1: StandardMaterial;

  constructor(engineStore: EngineStore) {
    this.blue1 = new StandardMaterial('material-blue1', engineStore.scene);
    this.blue1.diffuseColor = new Color3(0, 0, 1);
  }
}
