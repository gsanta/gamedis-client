import Canvas from '@/components/canvas/Canvas';
import RendererProvider from '@/components/canvas/RendererProvider';
import useAuthFromLocalStorage from '@/features/auth/useAuthFromLocalStorage';
import { globalContext, globalContextState } from '@/globalContext';
import { Header } from 'antd/lib/layout/layout';
import { Renderer } from 'pixi.js';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { SidePanel } from './SidePanel';

const queryClient = new QueryClient();

const App2 = (): JSX.Element => {
  useAuthFromLocalStorage();

  return (
    // <React.StrictMode>
    //   <globalContext.Provider value={globalContextState}>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
    //   </globalContext.Provider>
    // </React.StrictMode>
  );
};

export default App2;
