import React from 'react'
import { Contaienr } from './stytes'

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],
}

function Selectinput() {
  return (
    <Contaienr>
      <select>
        <option value="a">Laís</option>
        <option value="b">Diana</option>
        <option value="c">Miriam</option>
      </select>
    </Contaienr>
  )
}

export default Selectinput