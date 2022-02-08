import { Camera, Engine, Scene } from 'babylonjs';
import { makeObservable, observable } from 'mobx';

export default class EngineStore {
  isLoaded = false;

  engine: Engine | null = null;

  scene: Scene | null = null;

  canvas: HTMLCanvasElement | null = null;

  camera: Camera | null = null;

  constructor() {
    makeObservable(this, {
      isLoaded: observable,
    });
  }
}
