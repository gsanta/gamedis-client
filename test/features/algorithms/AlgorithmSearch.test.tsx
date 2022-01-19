import AlgorithmSearch from '@/components/algorithms/AlgorithmSearch';
import store from '@/store';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

describe('Component: AlgorithmSearch', () => {
  it('displays the list of algorithms available', async () => {
    render(
      <Provider store={store}>
        <AlgorithmSearch />
      </Provider>,
    );

    const displayedTasks = await screen.findByTestId('algorithm-item');
    expect(displayedTasks.textContent).toBe('2d visibility ');
  });
});
