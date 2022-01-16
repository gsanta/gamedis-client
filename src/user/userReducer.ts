import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import authStore, { UserAuthData } from '../features/login/authStore';

interface UserReducerState {
  isLoggedIn: boolean;
  auth?: UserAuthData;
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
    setUser: {
      reducer: (state, action: PayloadAction<UserAuthData | null>) => {
        state = { ...state, ...(action.payload || {}) };
      },
      prepare: (payload: UserAuthData | null) => {
        if (payload) {
          authStore.setUser({ token: payload.token, email: payload.email });
        } else {
          authStore.clearUser();
        }

        return { payload };
      },
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
