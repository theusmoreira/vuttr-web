import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';
import GlobalStyle from './styles/Global';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <GlobalStyle />
      <Routes />
    </AppProvider>
  </BrowserRouter>
);

export default App;
