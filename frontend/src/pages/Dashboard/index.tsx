import React, { useMemo, useState } from 'react';

// Components
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox'

// Mock
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';

// Utils
import listOfMonths from '../../utils/months';

// style
import { Container, Content } from './styles';

function Dashboard() {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const handleMonthSelected = (month: string) => {
    try {
      const perseMonth = Number(month);
      setMonthSelected(perseMonth);
    } catch (e) {
      throw new Error('invalid month value. Is Accept 0 - 24.');
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const perseYear = Number(year);
      setYearSelected(perseYear);
    } catch (e) {
      throw new Error('invalid month value. Is Accept 0 - 24.');
    }
  };

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  return (
    <Container>
      <ContentHeader title="DashBoard" lineColor="#F7931B">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Content>
        <WalletBox 
          title="Saldo"
          color='#4e41f0'
          amount={150.00}
          footerlabe="Atualizado com base nas estradas e saídas"
          icon="dolar"
        />
        <WalletBox 
          title="Entradas"
          color='#f7931b'
          amount={5000.00}
          footerlabe="Atualizado com base nas estradas e saídas"
          icon="arrow-up"
        />
                <WalletBox 
          title="Saída"
          color='#E44c4e'
          amount={4850.00}
          footerlabe="Atualizado com base nas estradas e saídas"
          icon="arrow-down"
        />
      </Content>
    </Container>
  );
}

export default Dashboard;
