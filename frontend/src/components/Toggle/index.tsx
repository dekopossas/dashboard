import React, { useState } from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';

function Toggle() {
  const [online, setOnline] = useState(false);

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={online}
        onChange={() => setOnline(!online)}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
}

export default Toggle;
