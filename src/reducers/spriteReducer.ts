import { Sprite } from '../features/sprite/Sprite';

export interface SpriteReducerState {
  sprites: Sprite[];
}

const initialState: SpriteReducerState = {
  sprites: [],
};

const spriteReducer = (state = initialState, action: any = undefined): SpriteReducerState => {
  switch (action.type) {
    default:
      return { sprites: state.sprites };
  }
};

export default spriteReducer;
