import Rectangle from '@/features/algorithms/visibility_2d/Rectangle';
import { PixieRenderer } from '@/features/canvas/rendering/PixieRenderer';
import { globalContext } from '@/globalContext';
import RectShape from '@/model/RectShape';
import View from '@/model/View';
import React, { useCallback, useContext } from 'react';
import { RenderingContext } from './RendererProvider';
import Toolbar from './Toolbar';

const Canvas = () => {
  const { viewStore } = useContext(globalContext);
  const { renderer } = useContext(RenderingContext);

  const ref = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null) {
        const pixieRenderer = renderer as PixieRenderer;
        node.appendChild(pixieRenderer.app.view);
        viewStore.setRenderer(renderer);

        viewStore.addView(new View(new RectShape(new Rectangle(10, 10, 50, 50))));
      }
    },
    [renderer, viewStore],
  );

  // const mouseMove = (e: React.MouseEvent) => {
  //   if (ctx) {
  //     const { left, top } = e.currentTarget.getBoundingClientRect();
  //     canvasStore.setMousePosition(new Point(e.clientX - left, e.clientY - top));
  //   }
  // };

  return (
    <div ref={ref} className="panel__main">
      <Toolbar />
      {/* <canvas
        className="canvas__canvas"
        width="1800"
        height="1000"
        ref={ref}
        onMouseMove={(e) => mouseMove(e)}
      ></canvas> */}
    </div>
  );
};

export default Canvas;
