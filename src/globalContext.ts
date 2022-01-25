import React from 'react';
import AlgorithmStore from './features/algorithms/AlgorithmStore';
import AuthStore from './features/auth/AuthStore';
import CanvasStore from './features/canvas/CanvasStore';
import GridStore from './features/grid/GridStore';

export const globalContextState = {
  authStore: new AuthStore(),
  algStore: new AlgorithmStore(),
  gridStore: new GridStore(),
  canvasStore: new CanvasStore(),
};

export const globalContext = React.createContext(globalContextState);

type GlobalContext = typeof globalContextState;

export default GlobalContext;
