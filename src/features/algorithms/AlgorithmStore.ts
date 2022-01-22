import { makeObservable, observable } from 'mobx';

export default class AlgorithmStore {
  algorithms: Algorithm[] = [
    {
      name: '2d visibility',
    },
  ];

  constructor() {
    makeObservable(this, {
      algorithms: observable,
    });
  }
}
