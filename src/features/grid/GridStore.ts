import { makeObservable, observable } from 'mobx';

export default class GridStore {
  gridSize = 20;

  showGrid = false;

  constructor() {
    makeObservable(this, {
      gridSize: observable,
      showGrid: observable,
    });
  }
}
