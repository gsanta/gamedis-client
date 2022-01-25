import { action, computed, makeObservable, observable } from 'mobx';

export default class GridStore {
  gridSize = 20;

  private _isGridVisible = false;

  get isGridVisible() {
    return this._isGridVisible;
  }

  setGridVisible = (isVisible: boolean) => {
    this._isGridVisible = isVisible;
  };

  constructor() {
    makeObservable<GridStore, '_isGridVisible'>(this, {
      gridSize: observable,
      _isGridVisible: observable,
      isGridVisible: computed,
      setGridVisible: action,
    });
  }
}
