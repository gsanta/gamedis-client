export enum ObjectDataType {
  Circle = 'Circle',
  Line = 'Line',
  Rectangle = 'Rectangle',
}

export interface ObjectData {
  type: ObjectDataType;
}
