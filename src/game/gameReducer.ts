import { createSlice } from '@reduxjs/toolkit';

export interface GameState {
  isLoaded: boolean;
}

const initialState: GameState = {
  isLoaded: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
});

export default gameSlice;
