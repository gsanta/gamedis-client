export enum ToolType {
  Move = 'Move',
  Create = 'Create',
}

export interface Tool {
  toolType: ToolType;
  toolName: string;
  activate(): void;
  deactivate(): void;
}
