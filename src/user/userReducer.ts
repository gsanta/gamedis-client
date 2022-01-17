import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import authStore, { UserAuthData } from '../features/login/authStore';

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
    login: (state, action: PayloadAction<{ authHeader: string; email: string }>) => {
      const { authHeader, email } = action.payload;
      const authData = authHeader?.split(' ');
      if (authHeader?.length === 2) {
        state.auth = {
          token: authData[1],
          email: email,
        };
      }
    },
    setUser: {
      reducer: (state, action: PayloadAction<UserAuthData | null>) => {
        state.auth = action.payload;
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
