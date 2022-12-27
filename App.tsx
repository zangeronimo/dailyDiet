import React from 'react';
import {Text} from 'react-native';

import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';

import {Container} from './src/styles/global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text>Hello</Text>
      </Container>
    </ThemeProvider>
  );
};

export default App;
