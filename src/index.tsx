import React from 'react';
import ReactDOM from 'react-dom';
import App from '../pages/app';

declare const BACKEND_TYPE: string;

if (BACKEND_TYPE === 'msw') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('../msw_mock_api/mocks/browser');
  worker.start({ onUnhandledRequest: 'warn' });
}

ReactDOM.render(<App />, document.getElementById('root'));
