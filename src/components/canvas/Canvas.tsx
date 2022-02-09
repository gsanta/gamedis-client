import useLoadEngine from '@/engine/hooks/useLoadEngine';
import React from 'react';
import { RenderingContext } from './RendererProvider';
import Toolbar from './Toolbar';

const Canvas = () => {
  const [elRef, renderingContext] = useLoadEngine();
  return (
    <div className="panel__main">
      <RenderingContext.Provider value={renderingContext}>
        <Toolbar />
        <canvas className="canvas__canvas" ref={elRef}></canvas>
      </RenderingContext.Provider>
    </div>
  );
};

export default Canvas;
