import React, { useMemo } from 'react';

import emojis from '../../utils/emojis';

import { Container, Profile, UserName, Welcome } from './styles';

function MainHeader() {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <h1>Toogle</h1>

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>André Possas</UserName>
      </Profile>
    </Container>
  );
}

export default MainHeader;
