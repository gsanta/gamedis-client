import useAuthFromLocalStorage from '@/features/auth/useAuthFromLocalStorage';
import dynamic from 'next/dynamic';
import React from 'react';
// import { QueryClient } from 'react-query';
import { globalContext, globalContextState } from '../src/globalContext';

const App2 = dynamic(() => import('@/ui/App2'));

// const queryClient = new QueryClient();

const App = (): JSX.Element => {
  useAuthFromLocalStorage();

  return (
    <React.StrictMode>
      <globalContext.Provider value={globalContextState}>
        <div style={{ width: '100%', height: '100%' }}>
          <App2 />
        </div>
        {/* <QueryClientProvider client={queryClient}>
          <Header />
          <ReflexContainer orientation="vertical" style={{ height: 'calc(100% - 51px)' }}>
            <ReflexElement flex={0.2} className="left-pane">
              <SidePanel />
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="right-pane">
              <Renderer />
            </ReflexElement>
          </ReflexContainer>
        </QueryClientProvider> */}
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
