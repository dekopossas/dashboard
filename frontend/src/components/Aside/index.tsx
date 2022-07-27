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
        <MenuItemLink href="#">Entradas</MenuItemLink>
        <MenuItemLink href="#">Saidas</MenuItemLink>
        <MenuItemLink href="#">Sair</MenuItemLink>
      </MenuContainer>
    </Container>
  );
}

export default Aside;
