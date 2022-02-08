import EngineStore from '@/engine/EngineStore';
import MeshStore from '@/features/canvas/rendering/MeshStore';
import { viewStore } from '@/globalContext';
import ToolStore from '@/model/canvas/ToolStore';
import React from 'react';
import Canvas from './Canvas';

const engineStore = new EngineStore();
const meshStore = new MeshStore(engineStore);
viewStore.setMeshStore(meshStore);

export const renderingContextState = {
  engineStore,
  meshStore,
  toolStore: new ToolStore(engineStore, meshStore, viewStore),
};
export const RenderingContext = React.createContext(renderingContextState);
export type RenderingContextType = typeof renderingContextState;

const RendererProvider = () => {
  return (
    <RenderingContext.Provider value={renderingContextState}>
      <Canvas />
    </RenderingContext.Provider>
  );
};

export default RendererProvider;
