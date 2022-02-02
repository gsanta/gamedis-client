import React from 'react';
import AlgorithmStore from './features/algorithms/AlgorithmStore';
import AuthStore from './features/auth/AuthStore';
import ViewStore from './features/canvas/ViewStore';
import GridStore from './features/grid/GridStore';

export const globalContextState = {
  authStore: new AuthStore(),
  algStore: new AlgorithmStore(),
  gridStore: new GridStore(),
  viewStore: new ViewStore(),
};

export const globalContext = React.createContext(globalContextState);

type GlobalContext = typeof globalContextState;

export default GlobalContext;
