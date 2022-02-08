import useLoadEngine from '@/engine/hooks/useLoadEngine';
import React from 'react';
import Toolbar from './Toolbar';

const Canvas = () => {
  // const { viewStore, meshStore } = useContext(globalContext);
  const [elRef] = useLoadEngine();

  // const ref = useCallback(
  //   (node: HTMLDivElement) => {
  //     if (node !== null) {
  //       const pixieRenderer = renderer as PixieRenderer;
  //       node.appendChild(pixieRenderer.app.view);
  //       pixieRenderer.app.resizeTo = node;
  //       viewStore.setRenderer(renderer);

  //       viewStore.addView(new View(new RectShape(new Rectangle(10, 10, 50, 50))));
  //     }
  //   },
  //   [renderer, viewStore],
  // );

  // const mouseMove = (e: React.MouseEvent) => {
  //   if (ctx) {
  //     const { left, top } = e.currentTarget.getBoundingClientRect();
  //     canvasStore.setMousePosition(new Point(e.clientX - left, e.clientY - top));
  //   }
  // };

  return (
    <div className="panel__main">
      <Toolbar />
      <canvas
        className="canvas__canvas"
        ref={elRef}
        // onMouseMove={(e) => mouseMove(e)}
      ></canvas>
    </div>
  );
};

export default Canvas;
