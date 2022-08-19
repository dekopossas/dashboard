import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

// Mock
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';

import { Container } from './styles';

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

  // const years = useMemo(() => {
  //   let uniqueYears: number[] = [];

  //   listData.forEach((item) => {
  //     const date = new Date(item.date);
  //     const year = date.getFullYear();

  //     if (!uniqueYears.includes(year)) {
  //       uniqueYears.push(year);
  //     }
  //   });

  //   return uniqueYears.map((year) => {
  //     return {
  //       value: year,
  //       label: year,
  //     };
  //   });
  // }, [listData]);

  // const months = useMemo(() => {
  //   return listOfMonths.map((month, index) => {
  //     return {
  //       value: index + 1,
  //       label: month,
  //     };
  //   });
  // }, []);

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
    </Container>
  );
}

export default Dashboard;
