import React from 'react';
import AlgorithmStore from './features/algorithms/AlgorithmStore';
import AuthStore from './features/auth/AuthStore';
import ViewStore from './features/canvas/ViewStore';
import GridStore from './features/grid/GridStore';
import PaletteStore from './features/palette/PaletteStore';

// TODO find a better place, it is needed so renderer context can reach it
export const viewStore = new ViewStore();

export const globalContextState = {
  authStore: new AuthStore(),
  algStore: new AlgorithmStore(),
  gridStore: new GridStore(),
  viewStore,
  paletteStore: new PaletteStore(),
};

export const globalContext = React.createContext(globalContextState);

type GlobalContext = typeof globalContextState;

export default GlobalContext;
