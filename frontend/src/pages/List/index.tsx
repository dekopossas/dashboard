import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import HisrotyFinanceCard from '../../components/HisrotyFinanceCard';
import SelectInput from '../../components/SelectInput';

import { Container, Content } from './styles';

function List() {
  const options = [
    { value: 'diana', label: 'Diana' },
    { value: 'lais', label: 'Laís' },
    { value: 'miriam', label: 'Míriam' },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HisrotyFinanceCard
          amount="R$ 130,00"
          subtitle="02/08/2022"
          title="Conta de luz"
          tagColor="#e44c4e"
        />
      </Content>
    </Container>
  );
}

export default List;
