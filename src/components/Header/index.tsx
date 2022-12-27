import React from 'react';
import {Avatar, Container, Logo} from './style';

import LogoImg from '../../assets/logo.png';
import AvatarImg from '../../assets/avatar.png';

export const Header = () => {
  return (
    <Container>
      <Logo source={LogoImg} />
      <Avatar source={AvatarImg} />
    </Container>
  );
};
