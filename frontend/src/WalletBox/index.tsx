import React from 'react';

// Assets
import dollarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from './styles';

interface IWalletBoxProps {
  title: string;
  amont: number;
  footerlabe: string;
  icon: 'dolar' | 'arrow-down' | 'arrow-up';
}

function WalletBox() {
  return <Container>WalletBox</Container>;
}

export default WalletBox;
