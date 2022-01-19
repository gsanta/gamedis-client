import LoginDialog from '@/components/header/LoginDialog';
import store from '@/store';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

const queryClient = new QueryClient();

describe('Component: Login', () => {
  it('successful login', async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <LoginDialog onClose={() => {}} />
        </QueryClientProvider>
      </Provider>,
    );

    const emailInput = await screen.findByLabelText<HTMLInputElement>('email-input');
    fireEvent.change(emailInput, { target: { value: 'user1@test.com' } });
    expect(emailInput.value).toBe('user1@test.com');
  });
});
