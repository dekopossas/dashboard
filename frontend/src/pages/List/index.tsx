import React, { useEffect, useMemo, useState } from 'react';

import { useParams } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import HisrotyFinanceCard from '../../components/HisrotyFinanceCard';
import SelectInput from '../../components/SelectInput';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import { Container, Content, Filters } from './styles';

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
  date: string;
}

const List = () => {
  const [data, setData] = useState<IData[]>([]);

  const [search, setSearch] = useState('');
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  const { type } = useParams<{ type: string }>();

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas';
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
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

  useEffect(() => {
    const response = listData.map((item) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#E44c4e',
        date: item.date,
      };
    });
    setData(response);
  }, [data.length, listData]);

  const filteredData = data.filter((item) => {
    const date = new Date(item.date);
    const month = String(date.getMonth() + 1);
    const year = String(date.getFullYear());

    return month === monthSelected && year === yearSelected;
  });

  console.log(filteredData);

  const filteredInputTextData =
    search.length > 0
      ? filteredData.filter((item) => item.description.includes(search))
      : filteredData;

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <input
          name="search"
          type="text"
          placeholder="Buscar..."
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
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
        {filteredInputTextData.map((item) => (
          <HisrotyFinanceCard
            key={item.id}
            amount={item.amountFormatted}
            subtitle={item.dateFormatted}
            title={item.description}
            tagColor={item.tagColor}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
