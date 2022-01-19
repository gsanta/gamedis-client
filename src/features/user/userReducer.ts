import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import authStore, { UserAuthData } from './authStore';

interface UserState {
  auth: UserAuthData | null;
}

const initialUserData = authStore.getUser();

const initialState: UserState = {
  auth: initialUserData,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: {
      reducer: (state, action: PayloadAction<UserAuthData | null>) => {
        if (action.payload) {
          state.auth = action.payload;
        }
      },
      prepare: (payload: { authHeader: string; email: string }) => {
        const { authHeader, email } = payload;
        const authData = authHeader?.split(' ');

        if (authData?.length === 2) {
          const token = authData[1];
          authStore.setUser({ token, email });
          return {
            payload: {
              token: authData[1],
              email: email,
            },
          };
        }

        return { payload: null };
      },
    },
    logout: {
      reducer: (state) => {
        state.auth = null;
      },
      prepare: () => {
        authStore.clearUser();
        return { payload: undefined };
      },
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
