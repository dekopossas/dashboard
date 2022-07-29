import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { Container } from './styles';

function Dashboard() {
  const options = [
    { value: 'diana', label: 'Diana' },
    { value: 'lais', label: 'Laís' },
    { value: 'miriam', label: 'Míriam' },
  ];

  return (
    <Container>
      <ContentHeader title="DashBoard" lineColor={"#fff"}>
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
}

export default Dashboard;
