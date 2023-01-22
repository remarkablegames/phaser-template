import { makeAutoObservable } from 'mobx';

class State {
  score = 0;

  constructor() {
    makeAutoObservable(this);
  }
}

export const state = new State();
