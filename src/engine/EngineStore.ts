import { Camera, Engine, Scene } from 'babylonjs';

export default class EngineStore {
  engine: Engine;

  scene: Scene;

  canvas: HTMLCanvasElement;

  camera: Camera;

  constructor(engine: Engine, scene: Scene, canvas: HTMLCanvasElement, camera: Camera) {
    this.engine = engine;
    this.scene = scene;
    this.canvas = canvas;
    this.camera = camera;
  }
}
