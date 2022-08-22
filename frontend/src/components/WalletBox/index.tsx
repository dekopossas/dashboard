import React from 'react';

// Assets
import dollarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from './styles';

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerlabe: string;
  icon: 'dolar' | 'arrow-down' | 'arrow-up';
  color: string;
}

function WalletBox({ title, amount, footerlabe, icon, color }: IWalletBoxProps) {
  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>{amount}</h1>
      <small>{footerlabe}</small>
      <img src={dollarImg} alt={title} />
    </Container>
  );
}

export default WalletBox;
