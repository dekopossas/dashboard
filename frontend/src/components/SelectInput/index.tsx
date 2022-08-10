import React from 'react';
import { Contaienr } from './stytes';

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void | undefined;
  defaultValue?: string | number;
}

function SelectInput({ options, onChange, defaultValue }: ISelectInputProps) {
  return (
    <Contaienr>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Contaienr>
  );
}

export default SelectInput;
