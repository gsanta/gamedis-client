import { configureStore } from '@reduxjs/toolkit';
import spriteReducer, { SpriteReducerState } from '../reducers/spriteReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import emptySplitApi from '../services/emptySplitApi';
import engineReducer, { EngineReducerState } from '../engine/engineReducer';
import notificationReducer from '../features/notification/notificationReducer';
import loginReducer from '../features/login/loginReducer';

export interface ReducersState {
  sprite: SpriteReducerState;
  engine: EngineReducerState;
}

const store = configureStore({
  reducer: {
    sprite: spriteReducer,
    engine: engineReducer,
    notification: notificationReducer,
    login: loginReducer,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(emptySplitApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;
