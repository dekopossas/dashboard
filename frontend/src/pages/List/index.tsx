import React, { useMemo } from 'react';

import { useParams } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import HisrotyFinanceCard from '../../components/HisrotyFinanceCard';
import SelectInput from '../../components/SelectInput';

import { Container, Content, Filters } from './styles';

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

const List = () => {
  const { type } = useParams<{ type: string }>();

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas';
  }, [type]);

  const months = [
    { value: 9, label: 'Setembro' },
    { value: 8, label: 'Agosto' },
    { value: 7, label: 'Julho' },
    { value: 6, label: 'Junho' },
  ];

  const years = [
    { value: 2022, label: '2022' },
    { value: 2021, label: '2021' },
    { value: 2020, label: '2020' },
    { value: 2019, label: '2019' },
    { value: 2018, label: '2018' },
  ];
  return (
    <Container>
      <ContentHeader title={title} lineColor="#E44C4E">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

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
};

export default List;
