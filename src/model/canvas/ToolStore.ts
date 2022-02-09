import { action, makeObservable, observable } from 'mobx';
import { Tool, ToolType } from './Tool';

export default class ToolStore {
  activeTool: Tool | null = null;

  tools: Tool[] = [];

  constructor() {
    makeObservable(this, {
      addTool: action,
      activeTool: observable,
      getTools: observable,
      setActiveTool: action,
      tools: observable,
    });
  }

  addTool(tool: Tool) {
    this.tools.push(tool);
  }

  getTool(toolType: ToolType): Tool | undefined {
    return this.tools.find((tool) => tool.toolType === toolType);
  }

  getTools(): Tool[] {
    return this.tools;
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
