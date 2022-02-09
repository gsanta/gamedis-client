import EngineStore from '@/engine/EngineStore';
import useLoadEngine from '@/engine/hooks/useLoadEngine';
import MaterialStore from '@/features/canvas/rendering/MaterialStore';
import MeshStore from '@/features/canvas/rendering/MeshStore';
import ToolStore from '@/model/canvas/ToolStore';
import React from 'react';
import Toolbar from './Toolbar';

export type RenderingContextType = {
  engineStore: EngineStore;
  meshStore: MeshStore;
  toolStore: ToolStore;
  materialStore: MaterialStore;
};

export const RenderingContext = React.createContext<RenderingContextType | null>(null);

const RendererProvider = () => {
  debugger;
  const [elRef, renderingContext] = useLoadEngine();
  return (
    <RenderingContext.Provider value={renderingContext}>
      <div className="panel__main">
        <Toolbar />
        <canvas
          className="canvas__canvas"
          ref={elRef}
          // onMouseMove={(e) => mouseMove(e)}
        ></canvas>
      </div>
    </RenderingContext.Provider>
  );
};

export default RendererProvider;
