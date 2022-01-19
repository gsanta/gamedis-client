import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { drawScene } from './drawScene';
import { loadMap } from './loadMap';
import Point from './Point';
import Rectangle from './Rectangle';
import Segment from './Segment';
import { calculateVisibility } from './visibility';

const room = new Rectangle(0, 0, 700, 500);

const walls = [
  new Segment(20, 20, 20, 120),
  new Segment(20, 20, 100, 20),
  new Segment(100, 20, 150, 100),
  new Segment(150, 100, 50, 100),
];

const blocks = [new Rectangle(50, 150, 20, 20), new Rectangle(150, 150, 40, 80), new Rectangle(400, 400, 40, 40)];

const run = (lightSource: Point, ctx: CanvasRenderingContext2D) => {
  const endpoints = loadMap(room, blocks, walls, lightSource);
  const visibility = calculateVisibility(lightSource, endpoints);

  requestAnimationFrame(() => drawScene(ctx, lightSource, blocks, walls, visibility));
};

// run(new Point(100, 100));

const Visibility2d = () => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const mouseMove = ({ pageX, pageY }: React.MouseEvent) => {
    if (ctx) {
      run(new Point(pageX, pageY), ctx);
    }
  };

  const ref = useCallback(
    (node) => {
      if (node !== null) {
        setCtx(node.getContext('2d'));
        const xOffset = 0.5;
        const yOffset = 0.5;
        ctx?.translate(xOffset, yOffset);
        if (ctx) {
          run(new Point(100, 100), ctx);
        }
      }
    },
    [ctx],
  );

  return <canvas ref={ref} width="1800" height="1000" onMouseMove={(e) => mouseMove(e)}></canvas>;
};

console.log('visibility2d compiled');

ReactDOM.render(<Visibility2d />, document.getElementById('root'));
