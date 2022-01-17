import { Axis, MeshBuilder, Space } from 'babylonjs';
import engineStore from '../../../engine/EngineStore';
import Segment from '../visibility_2d/Segment';

export interface GameMap {
  walls: Segment[];
}

export const createTestMap = (): GameMap => {
  const walls = [
    new Segment(20, 20, 20, 120),
    new Segment(20, 20, 100, 20),
    new Segment(100, 20, 150, 100),
    new Segment(150, 100, 50, 100),
  ];

  return {
    walls,
  };
  // var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
};

const loadMap = (map: GameMap) => {
  const { scene } = engineStore;

  map.walls.forEach((wall, i) => {
    const width = wall.isHorizontal ? wall.length : 0.5;
    const depth = wall.isVertical ? wall.length : 0.5;
    const { center } = wall;
    const wallMesh = MeshBuilder.CreateBox('wall-' + i, { width, depth, height: 1 }, scene);
    wallMesh.translate(Axis.X, center.x, Space.WORLD);
    wallMesh.translate(Axis.Z, center.y, Space.WORLD);
  });
};

export default loadMap;
