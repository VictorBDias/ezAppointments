import React from 'react';
import { Input, InputLabel } from './styles';

function PrimaryInput({ description }) {
  return (
    <>
      <InputLabel>{description}</InputLabel>
      <Input
        name="description"
        title="Descrição"
        placeholder="Descrição para o agendamento"
      />
    </>
  );
}

export default PrimaryInput;
