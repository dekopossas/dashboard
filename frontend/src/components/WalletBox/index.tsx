import React, { useMemo } from 'react';
import CountUp from 'react-countup';

// Assets
import dolarImg from '../../assets/dolar.svg';
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
  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dolar':
        return dolarImg;
      case 'arrow-down':
        return arrowDownImg;
      case 'arrow-up':
        return arrowUpImg;
      default:
        return undefined;
    }
  }, [icon]);

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp end={amount} prefix={'R$'} separator="." decimal="," decimals={2} />
      </h1>
      <small>{footerlabe}</small>
      <img src={iconSelected} alt={title} />
    </Container>
  );
}

export default WalletBox;
