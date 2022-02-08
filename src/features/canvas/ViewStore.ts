import View from '@/model/View';
import MeshStore from './rendering/MeshStore';

export default class ViewStore {
  views: View[] = [];

  private meshStore: MeshStore | null = null;

  addView(view: View): void {
    this.views.push(view);
    this.meshStore?.addView(view);
  }

  setMeshStore(meshStore: MeshStore) {
    this.meshStore = meshStore;
    this.views.forEach((view) => meshStore.addView(view));
  }
}
