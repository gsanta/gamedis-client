import React from 'react';
import { Provider } from 'react-redux';
import RenderCanvas from '../ui/RenderCanvas';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <RenderCanvas />
    </Provider>
  );
};

export default App;
