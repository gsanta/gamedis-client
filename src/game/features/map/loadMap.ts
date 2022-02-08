import EngineStore from '@/engine/EngineStore';
import MeshStore from '@/features/canvas/rendering/MeshStore';
import { Axis, MeshBuilder, Space, Vector3 } from 'babylonjs';
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

const loadMap = (map: GameMap, engineStore: EngineStore, meshStore: MeshStore) => {
  const { scene } = engineStore;
  const { plane } = map;

  const radius = 10;
  const ground = MeshBuilder.CreateDisc('ground', { tessellation: 4, radius: 10 }, scene);
  ground.checkCollisions = true;
  ground.rotation.z = Math.PI / 4;
  ground.setAbsolutePosition(new Vector3(plane.center.x, 0, plane.center.y));
  meshStore.ground = ground;

  const thickness = 0.5;
  const depth = 1;
  const size = (4 * radius) / 3;
  const leftWall = MeshBuilder.CreateBox('wall-left', { width: thickness, depth, height: size }, scene);
  leftWall.translate(Axis.X, -(radius * 2) / 3, Space.WORLD);
  const rightWall = MeshBuilder.CreateBox('wall-right', { width: thickness, depth, height: size }, scene);
  rightWall.translate(Axis.X, (radius * 2) / 3, Space.WORLD);
  const topWall = MeshBuilder.CreateBox('wall-top', { width: size, depth, height: thickness }, scene);
  topWall.translate(Axis.Y, (radius * 2) / 3, Space.WORLD);
  const bottomWall = MeshBuilder.CreateBox('wall-bottom', { width: size, depth, height: thickness }, scene);
  bottomWall.translate(Axis.Y, -(radius * 2) / 3, Space.WORLD);
};

export default loadMap;
