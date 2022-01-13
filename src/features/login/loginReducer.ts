import { createSlice } from '@reduxjs/toolkit';

interface LoginReducerState {
  isDialogOpen: boolean;
}

const initialState: LoginReducerState = {
  isDialogOpen: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    openLoginDialog: (state, action) => {
      state.isDialogOpen = action.payload;
    },
  },
});

export const { openLoginDialog } = loginSlice.actions;
export default loginSlice.reducer;
