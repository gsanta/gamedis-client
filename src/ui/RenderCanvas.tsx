import React from 'react';
import useLoadEngine from '../engine/hooks/useLoadEngine';

const RenderCanvas = () => {
  const [elRef] = useLoadEngine();

  return <canvas ref={elRef} id="renderCanvas" touch-action="none" style={{ width: '100%', height: '100%' }}></canvas>;
};

export default RenderCanvas;
