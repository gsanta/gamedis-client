import React from 'react';
import './canvas.scss';
import Toolbar from './Toolbar';

export type CanvasProps = {
  children: JSX.Element;
};

const Canvas = ({ children }: CanvasProps) => {
  return (
    <div className="canvas">
      <Toolbar />
      {children}
    </div>
  );
};

export default Canvas;
