import Point from '@/features/algorithms/visibility_2d/Point';
import { globalContext } from '@/globalContext';
import React, { useCallback, useContext, useState } from 'react';
import './canvas.scss';
import Toolbar from './Toolbar';

const Canvas = () => {
  const { canvasStore } = useContext(globalContext);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const ref = useCallback(
    (node: HTMLCanvasElement) => {
      if (node !== null) {
        const parentDim = node.parentElement?.getBoundingClientRect();
        node.width = parentDim?.width || 1000;
        node.height = parentDim?.height || 500;

        setCtx(node.getContext('2d'));
        const xOffset = 0.5;
        const yOffset = 0.5;
        ctx?.translate(xOffset, yOffset);
        if (ctx) {
          canvasStore.setCtx(ctx);
        }
      }
    },
    [ctx, canvasStore],
  );

  const mouseMove = (e: React.MouseEvent) => {
    if (ctx) {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      canvasStore.setMousePosition(new Point(e.clientX - left, e.clientY - top));
    }
  };

  return (
    <div className="canvas">
      <Toolbar />
      <canvas
        className="canvas__canvas"
        width="1800"
        height="1000"
        ref={ref}
        onMouseMove={(e) => mouseMove(e)}
      ></canvas>
    </div>
  );
};

export default Canvas;
