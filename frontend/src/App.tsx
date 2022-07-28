import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';

import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
