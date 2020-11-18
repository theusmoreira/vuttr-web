import React from 'react';
import AppProvider from './hooks';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/Global';

const App: React.FC = () => (
  <AppProvider>
    <GlobalStyle />
    <SignIn />
  </AppProvider>
);

export default App;
