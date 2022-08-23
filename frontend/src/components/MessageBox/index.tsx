import React from 'react';

import happyImg from '../../assets/happy.svg';

import { Container } from './styles';

function MessageBox() {
  return (
    <Container>
      <header>
        <h1>Muito Bem!</h1>
        <img src={happyImg} alt="" />
      </header>
    </Container>
  );
}

export default MessageBox;
