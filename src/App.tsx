import React from 'react';
import { Provider } from 'react-redux';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';
import './app.scss';
import 'antd/dist/antd.css';
import './features/sprite/sprite.scss';
import { SidePanel } from './ui/SidePanel';
import store from './store';
import Notifications from './features/notification/Notifications';
import Header from './components/header/Header';

import { QueryClient, QueryClientProvider } from 'react-query';
import { globalContext, globalContextState } from './globalContext';
import Canvas from './components/canvas/Canvas';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <globalContext.Provider value={globalContextState}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <Header />
            <ReflexContainer orientation="vertical" style={{ height: 'calc(100% - 51px)' }}>
              <ReflexElement flex={0.2} className="left-pane">
                <SidePanel />
              </ReflexElement>

              <ReflexSplitter />

              <ReflexElement className="right-pane">
                <Canvas />
              </ReflexElement>
            </ReflexContainer>
            <Notifications />
          </Provider>
        </QueryClientProvider>
      </globalContext.Provider>
    </React.StrictMode>
  );
};

export default App;
