import React, { useMemo, useState } from 'react';

// Components
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartComponent from '../../components/PieChartComponent';

// Mock
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';

// Utils
import listOfMonths from '../../utils/months';

// Assets
import sadImg from '../../assets/sad.svg';
import happyImg from '../../assets/happy.svg';
import grinning from '../../assets/grinning.svg';

// style
import { Container, Content } from './styles';
import { info } from 'console';

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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amonut! Amount must be number.');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (err) {
          throw new Error('Invalid amonut! Amount must be number.');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const relationExpensesVersusGains = useMemo(() => {
    let total: number = 0;
      
    let percentGains: number = 0;
    let percentExpenses: number = 0;

    if(totalGains > 0 || totalExpenses > 0) {
      
      total = totalGains + totalExpenses;
      
      percentGains = (totalGains / total) * 100;
      percentExpenses = (totalExpenses / total) * 100;
    }

    const data = [
      {
        name: 'Entradas',
        value: totalExpenses,
        percent: Number(percentGains.toFixed(1)),
        color: '#E44C4E',
      },
      {
        name: 'Saídas',
        value: totalGains,
        percent: Number(percentExpenses.toFixed(1)),
        color: '#F7931B',
      },
    ];

    return data;
  }, [totalExpenses, totalGains]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalExpenses, totalGains]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês você gastou mais do que deveria.',
        footerText: 'Verifique seus gastos e tente cortar algumas coisas desnecessárias.',
        icon: sadImg,
      };
    } else if (totalBalance === 0) {
      return {
        title: 'Ufaaa!',
        description: 'Neste mês você gastou exatamente o que ganhou.',
        footerText: 'Tenha cuidado. No próximo teste poupar o seu dinheiro',
        icon: grinning,
      };
    } else {
      return {
        title: 'Muito bem!',
        description: 'Sua carteira está positiva!',
        footerText: 'Continue assim. Considere investir o seu saldo.',
        icon: happyImg,
      };
    }
  }, [totalBalance]);

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
          color="#4e41f0"
          amount={totalBalance}
          footerlabe="Atualizado com base nas estradas e saídas"
          icon="dolar"
        />
        <WalletBox
          title="Entradas"
          color="#f7931b"
          amount={totalGains}
          footerlabe="Atualizado com base nas estradas e saídas"
          icon="arrow-up"
        />
        <WalletBox
          title="Saída"
          color="#E44c4e"
          amount={totalExpenses}
          footerlabe="Atualizado com base nas estradas e saídas"
          icon="arrow-down"
        />
        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
        <PieChartComponent data={relationExpensesVersusGains} />
      </Content>
    </Container>
  );
}

export default Dashboard;
