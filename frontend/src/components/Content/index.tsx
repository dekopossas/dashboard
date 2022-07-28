import React from 'react';

import { Container } from './styles';

function Content({ children }: any) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Content;
