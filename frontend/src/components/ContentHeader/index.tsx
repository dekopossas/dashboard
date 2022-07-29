import React from 'react';
import Selectinput from '../../components/Selectinput';

import { Container, TitleContainer, Controllers } from './styles';

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  controllers: React.ReactNode;
}

function ContentHeader({ title, lineColor, controllers }: IContentHeaderProps) {
  const options = [
    { value: 'diana', label: 'Diana' },
    { value: 'lais', label: 'Laís' },
    { value: 'miriam', label: 'Míriam' },
  ];

  return (
    <Container>
      <TitleContainer>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>
        {controllers}
      </Controllers>
    </Container>
  );
}

export default ContentHeader;
