import { createSlice } from '@reduxjs/toolkit';

export interface AlgorithmsState {
  algorithms: Algorithm[];
}

const initialState: AlgorithmsState = {
  algorithms: [
    {
      name: '2d visibility',
    },
  ],
};

const algorithmReducer = createSlice({
  name: 'algorithm',
  initialState,
  reducers: {},
});

export default algorithmReducer.reducer;
