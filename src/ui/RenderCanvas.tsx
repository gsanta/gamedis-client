import { globalContext } from '@/globalContext';
import React, { useCallback, useContext } from 'react';
import useLoadEngine from '../engine/hooks/useLoadEngine';

const RenderCanvas = () => {
  // const [elRef] = useLoadEngine();
  const { renderer } = useContext(globalContext);

  const elRef = useCallback((node) => {
    if (node !== null) {
      renderer.setup();

      node;
    }
  });

  return <div ref={elRef} id="renderCanvas" touch-action="none" style={{ width: '100%', height: '100%' }}></div>;
};

export default RenderCanvas;
