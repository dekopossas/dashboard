import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, LogImg, Title, Header, MenuContainer, MenuItemLink } from './styles';

function Aside() {
  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="My Wallet Logo" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="#">DashBoard</MenuItemLink>
      </MenuContainer>
    </Container>
  );
}

export default Aside;
