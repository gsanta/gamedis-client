import EngineStore from '@/engine/EngineStore';
import MeshStore from '@/features/canvas/rendering/MeshStore';
import ViewStore from '@/features/canvas/ViewStore';
import { action, makeObservable, observable } from 'mobx';
import CreateTool from './CreateTool';
import MoveTool from './MoveTool';
import { Tool } from './Tool';

export default class ToolStore {
  moveTool: MoveTool;

  createTool: CreateTool;

  activeTool: Tool | null = null;

  constructor(engineStore: EngineStore, meshStore: MeshStore, viewStore: ViewStore) {
    this.moveTool = new MoveTool(engineStore, meshStore);
    this.createTool = new CreateTool(engineStore, viewStore, meshStore);

    makeObservable(this, {
      activeTool: observable,
      setActiveTool: action,
    });
  }

  setActiveTool(tool: Tool | null) {
    if (this.activeTool) {
      this.activeTool.deactivate();
    }
    if (this.activeTool === tool) {
      this.activeTool = null;
    } else {
      this.activeTool = tool;
      this.activeTool?.activate();
    }
  }
}
