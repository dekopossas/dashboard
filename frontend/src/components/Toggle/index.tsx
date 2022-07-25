import React, { useState } from 'react';
import { Container, ToggleLabel } from './styles';
import Switch from 'react-switch';

function Toggle() {
  const [online, setOnline] = useState(false)

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <Switch
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
