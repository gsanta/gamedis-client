import React from 'react';
import { Provider } from 'react-redux';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';
import './app.scss';
import './styles.scss';
import 'antd/dist/antd.css';
import './features/sprite/sprite.scss';
import RenderCanvas from './ui/RenderCanvas';
import { SidePanel } from './ui/SidePanel';
import store from './ui/store';
import Notifications from './features/notification/Notifications';
import Header from './layout/Header';
import LoginDialog from './features/login/LoginDialog';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Header />
          <ReflexContainer orientation="vertical" style={{ height: 'calc(100% - 51px)' }}>
            <ReflexElement className="left-pane">
              <SidePanel />
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="right-pane">
              <RenderCanvas />
            </ReflexElement>
          </ReflexContainer>
          <Notifications />
          <LoginDialog />
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
