import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import engineReducer from '../engine/engineReducer';
import loginReducer from '../features/login/loginReducer';
import notificationReducer from '../features/notification/notificationReducer';
import spriteReducer from '../reducers/spriteReducer';
import userReducer from '../user/userReducer';

// export interface ReducersState {
//   sprite: SpriteReducerState;
//   engine: EngineReducerState;
// }

const store = configureStore({
  reducer: {
    sprite: spriteReducer,
    engine: engineReducer,
    notification: notificationReducer,
    login: loginReducer,
    user: userReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;
