import { render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import SpriteSearch from '../../../../src/features/sprite/components/SpriteSearch';
import store from '../../../../src/store';

const queryClient = new QueryClient();

describe('Component: SpriteSearch', () => {
  it('displays a list of sprites', async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SpriteSearch />
        </QueryClientProvider>
      </Provider>,
    );

    const displayedTasks = await screen.findByTestId('spritesheet-item');
    expect(displayedTasks.textContent).toBe('player');
  });
});
