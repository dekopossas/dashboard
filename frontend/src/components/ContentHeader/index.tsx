import React from 'react';
import Selectinput from '../../components/Selectinput';

import { Container, TitleContainer, Controllers } from './styles';

function ContentHeader() {
  return (
    <Container>
      <TitleContainer>
        <h1>Título</h1>
      </TitleContainer>
      <Controllers>
        <Selectinput />
      </Controllers>
    </Container>
  );
}

export default ContentHeader;
