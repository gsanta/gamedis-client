import React from 'react';
import AlgorithmStore from './features/algorithms/AlgorithmStore';
import AuthStore from './features/auth/AuthStore';

export const globalContextState = {
  authStore: new AuthStore(),
  algStore: new AlgorithmStore(),
};

export const globalContext = React.createContext(globalContextState);

type GlobalContext = typeof globalContextState;

export default GlobalContext;
