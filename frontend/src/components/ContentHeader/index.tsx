import React from 'react';
import { Container, TitleContainer, Controllers } from './styles';

function ContentHeader() {
  return (
    <Container>
      <TitleContainer>
        <h1>Título</h1>
      </TitleContainer>
      <Controllers>
        <button type="button">Botão A</button>
        <button type="button">Botão B</button>
      </Controllers>
    </Container>
  );
}

export default ContentHeader;
