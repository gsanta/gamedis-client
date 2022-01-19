import { MeshBuilder, Vector3 } from 'babylonjs';
import engineStore from '../../../engine/EngineStore';
import Rectangle from '../../../features/algorithms/visibility_2d/Rectangle';
import Segment from '../../../features/algorithms/visibility_2d/Segment';

export interface GameMap {
  walls: Segment[];
  plane: Rectangle;
}

export const createTestMap = (): GameMap => {
  const walls = [
    new Segment(-50, -50, -50, 50),
    new Segment(-50, -50, 50, -50),
    new Segment(-50, 50, 50, 50),
    new Segment(50, -50, 50, 50),
  ];

  const plane = new Rectangle(-50, -50, 100, 100);

  return {
    walls,
    plane,
  };
};

const loadMap = (map: GameMap) => {
  const { scene } = engineStore;
  const { plane } = map;

  map.walls.forEach((wall, i) => {
    const width = wall.isHorizontal ? wall.length : 0.5;
    const depth = wall.isVertical ? wall.length : 0.5;
    const { center } = wall;
    const wallMesh = MeshBuilder.CreateBox('wall-' + i, { width, depth, height: 1 }, scene);
    wallMesh.setAbsolutePosition(new Vector3(center.x, 0, center.y));
  });

  const ground = MeshBuilder.CreateGround('ground', { width: plane.width, height: plane.height }, scene);
  ground.setAbsolutePosition(new Vector3(plane.center.x, 0, plane.center.y));
};

export default loadMap;
