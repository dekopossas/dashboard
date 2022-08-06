import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './app.routes';

function Routes() {
  return (
    <BrowserRouter>
      <App />;
    </BrowserRouter>
  );
}

export default Routes;
