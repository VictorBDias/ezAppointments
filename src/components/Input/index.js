import React from 'react';
import { Text, Input } from 'react-native';
import { MyInput } from './styles';

function InputText() {
  return (
    <MyInput>
      <Text>Eta</Text>
      <Input type="text" name="name" />
    </MyInput>
  );
}

export default InputText;
