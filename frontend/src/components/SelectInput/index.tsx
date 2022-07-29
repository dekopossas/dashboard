import React from 'react'
import { Contaienr } from './stytes'

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],
}

function SelectInput({ options }: ISelectInputProps) {
  return (
    <Contaienr>
      <select>
        {
          options.map((option) => (

            <option value={option.value} key={option.value}>{option.label}</option>
          ))
        }
      </select>
    </Contaienr>
  )
}

export default SelectInput