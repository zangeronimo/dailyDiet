import React from 'react';
import {Text} from 'react-native';
import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Totalizer} from '../../components/Totalizer';
import {Container, Content} from './styles';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Totalizer />

      <Content>
        <Text>Refeições</Text>
        <Button />
      </Content>
    </Container>
  );
};
