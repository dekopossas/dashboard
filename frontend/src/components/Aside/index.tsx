import React from 'react';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

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
        <MenuItemLink href="/dashboard">
          <MdDashboard />
          DashBoard
        </MenuItemLink>
        <MenuItemLink href="/list/entry-balance">
          <MdArrowDownward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="/list/exit-balance">
          <MdArrowUpward />
          Saidas
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
}

export default Aside;
