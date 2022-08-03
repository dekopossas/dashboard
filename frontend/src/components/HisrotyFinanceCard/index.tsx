import React from 'react'

import { Container, Tag } from './styles';

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
      <Tag color = {tagColor} />
        <div>
          <span>{title}</span>
          <small>{subtitle}</small>
        </div>
        <h3>{amount}</h3>
    </Container>
  )
}

export default HisrotyFinanceCard