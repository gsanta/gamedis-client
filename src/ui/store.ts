import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import engineReducer from '../engine/engineReducer';
import notificationReducer from '../features/notification/notificationReducer';
import spriteReducer from '../reducers/spriteReducer';
import userReducer from '../features/user/userReducer';

const store = configureStore({
  reducer: {
    sprite: spriteReducer,
    engine: engineReducer,
    notification: notificationReducer,
    user: userReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;
