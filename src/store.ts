import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import engineReducer from './engine/engineReducer';
import notificationReducer from './features/notification/notificationReducer';
import algorithmReducer from './features/algorithms/algorithmsReducer';

const store = configureStore({
  reducer: {
    engine: engineReducer,
    notification: notificationReducer,
    algorithm: algorithmReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;
