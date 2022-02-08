import { RenderingContext } from '@/components/canvas/RendererProvider';
import MeshStore from '@/features/canvas/rendering/MeshStore';
import { Engine, Scene, SceneLoader, ArcRotateCamera, Vector3, HemisphericLight, Camera } from 'babylonjs';
import { useCallback, useContext } from 'react';
import loadMap, { createTestMap } from '../../game/features/map/loadMap';
import EngineStore from '../EngineStore';

const createScene = function (engine: Engine, canvas: HTMLCanvasElement): { scene: Scene; camera: Camera } {
  const scene = new Scene(engine);

  SceneLoader.ImportMeshAsync('', 'https://assets.babylonjs.com/meshes/', 'box.babylon');

  const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2, 10, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  new HemisphericLight('light', new Vector3(1, 1, 0), scene);

  return { scene, camera };
};

function initEngine(node: HTMLCanvasElement, engineStore: EngineStore, meshStore: MeshStore) {
  const engine = new Engine(node, true);
  const { scene, camera } = createScene(engine, node);

  engineStore.engine = engine;
  engineStore.scene = scene;
  engineStore.camera = camera;
  engineStore.canvas = node;
  engineStore.isLoaded = true;

  loadMap(createTestMap(), engineStore, meshStore);

  engine.runRenderLoop(function () {
    scene.render();
  });

  window.addEventListener('resize', function () {
    engine.resize();
  });
}

const useLoadEngine = (): [(node: any) => void] => {
  const { engineStore, meshStore } = useContext(RenderingContext);

  const elRef = useCallback(
    (node) => {
      if (node !== null && !engineStore.isLoaded) {
        initEngine(node, engineStore, meshStore);
      }
    },
    [engineStore, meshStore],
  );

  return [elRef];
};

export default useLoadEngine;
