import React from 'react';

import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';
import {Container} from './src/styles/global';
import {Home} from './src/screems/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
};

export default App;
