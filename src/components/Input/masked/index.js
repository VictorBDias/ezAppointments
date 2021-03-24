import React from 'react';
import { InputMask, InputLabel } from './styles';

function MaskedInput({ description, valor }) {
  return (
    <>
      <InputLabel>{description}</InputLabel>
      <InputMask
        type="datetime"
        title="Horário"
        name="schedule"
        value={valor}
        placeholder="Horário para o agendamento"
        options={{
          format: 'HH:mm',
        }}
      />
    </>
  );
}

export default MaskedInput;
