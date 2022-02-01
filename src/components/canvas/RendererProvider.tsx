import { PixieRenderer } from '@/features/canvas/rendering/PixieRenderer';
import React from 'react';
import Canvas from './Canvas';

export const renderingContextState = {
  renderer: new PixieRenderer(),
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
