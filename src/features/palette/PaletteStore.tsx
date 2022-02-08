import ShapeType from '@/model/ShapeType';
import { makeObservable, observable } from 'mobx';

export default class PaletteStore {
  selectedType: ShapeType | null = null;

  constructor() {
    makeObservable(this, {
      selectedType: observable,
    });
  }
}
