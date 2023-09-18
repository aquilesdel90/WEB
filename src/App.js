import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

// import { ColorModeSwitcher } from './ColorModeSwitcher';

import './App.css';

import Page from './pages/Page.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Page />
    </ChakraProvider>
  );
}

export default App;
