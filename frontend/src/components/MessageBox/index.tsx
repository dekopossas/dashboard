import React from 'react';

import happyImg from '../../assets/happy.svg';

import { Container } from './styles';

function MessageBox() {
  return (
    <Container>
      <header>
        <h1>
          Muito Bem!
          <img src={happyImg} alt="" />
        </h1>
        <p>Sua carteira está positiva!</p>
      </header>
      <footer>
        <span>Continue assim, considere investir esse valor!</span>
      </footer>
    </Container>
  );
}

export default MessageBox;
