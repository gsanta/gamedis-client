import React from 'react';
import { Provider } from 'react-redux';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';
import './app.scss';
import 'antd/dist/antd.css';
import './features/sprite/sprite.scss';
import RenderCanvas from './ui/RenderCanvas';
import { SidePanel } from './ui/SidePanel';
import store from './ui/store';
import Notifications from './features/notification/Notifications';
import Header from './layout/Header';
import LoginDialog from './features/login/LoginDialog';
import MainMenu from './layout/Menu';

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Header />
        <ReflexContainer orientation="vertical">
          <ReflexElement className="left-pane">
            <MainMenu />

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
    </React.StrictMode>
  );
};

export default App;
