import React from 'react';
import { Provider } from 'react-redux';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { SidePanel } from '../src/ui/SidePanel';
import store from '../src/store';
import Notifications from '../src/features/notification/Notifications';
import Header from '../src/components/header/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import { globalContext, globalContextState } from '../src/globalContext';
import Canvas from '../src/components/canvas/Canvas';
import useAuthFromLocalStorage from '@/features/auth/useAuthFromLocalStorage';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  console.log('In App');

  useAuthFromLocalStorage();

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

App.getInitialProps = async ({ req }: any) => {
  console.log('app.getinitialprops');
  // use
  // let token;
  // if (req) {
  //   // server
  //   return { page: {} };
  // } else {
  //   // client
  //   const token = localStorage.getItem("auth");
  //   const res = await fetch(`${process.env.API_URL}/pages/about`, {
  //     headers: { Authorization: token },
  //   });
  //   const data = await res.json();
  //   return { page: data };
  // }
  return {};
};

export default App;
