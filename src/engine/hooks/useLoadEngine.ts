import { RenderingContextType } from '@/components/canvas/RendererProvider';
import MaterialStore from '@/features/canvas/rendering/MaterialStore';
import MeshStore from '@/features/canvas/rendering/MeshStore';
import { globalContext } from '@/globalContext';
import CreateTool from '@/model/canvas/CreateTool';
import MoveTool from '@/model/canvas/MoveTool';
import ToolStore from '@/model/canvas/ToolStore';
import { Engine, Scene, SceneLoader, ArcRotateCamera, Vector3, HemisphericLight, Camera } from 'babylonjs';
import { useCallback, useContext, useEffect, useState } from 'react';
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

function initEngine(node: HTMLCanvasElement) {
  const engine = new Engine(node, true);
  const { scene, camera } = createScene(engine, node);

  engine.runRenderLoop(function () {
    scene.render();
  });

  window.addEventListener('resize', function () {
    engine.resize();
  });

  return new EngineStore(engine, scene, node, camera);
}

const useLoadEngine = (): [(node: any) => void, RenderingContextType | null] => {
  const [node, setNode] = useState<HTMLCanvasElement | null>(null);
  const [renderingContext, setRenderingContext] = useState<RenderingContextType | null>(null);
  const { viewStore } = useContext(globalContext);

  useEffect(() => {
    if (node !== null && renderingContext === null) {
      const engineStore = initEngine(node);
      const materialStore = new MaterialStore(engineStore);
      const meshStore = new MeshStore(engineStore, materialStore);
      loadMap(createTestMap(), engineStore, meshStore);
      const toolStore = new ToolStore();
      toolStore.addTool(new MoveTool(engineStore, meshStore));
      toolStore.addTool(new CreateTool(engineStore, viewStore, meshStore));
      viewStore.setMeshStore(meshStore);

      setRenderingContext({
        materialStore,
        meshStore,
        engineStore,
        toolStore,
      });
    }
  }, [node, viewStore, renderingContext]);

  const elRef = useCallback((n) => setNode(n), [setNode]);

  return [elRef, renderingContext];
};

export default useLoadEngine;
