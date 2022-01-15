import { createSlice } from '@reduxjs/toolkit';
import authStore from '../features/login/authStore';
import store from '../ui/store';

interface UserReducerState {
  isLoggedIn: boolean;
  token?: string;
  email?: string;
}

const initialUserData = authStore.getUser();

const initialState: UserReducerState = {
  isLoggedIn: !!initialUserData?.token,
  ...initialUserData,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { token, email } = action.payload;
      if (token) {
        state.token = token;
        state.email = email;
      }
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
