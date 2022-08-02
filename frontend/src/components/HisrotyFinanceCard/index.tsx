import React from 'react'

import { Container } from './styles';

interface IHisrotyFinanceCardProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

function HisrotyFinanceCard({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount,
}: IHisrotyFinanceCardProps) {
  return (
    <Container color={cardColor}>
      HisrotyFinanceCard
    </Container>
  )
}

export default HisrotyFinanceCard