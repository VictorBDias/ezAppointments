import styled from 'styled-components/native';
import { Form as Unform } from '@unform/mobile';
import { TextInputMask } from 'react-native-masked-text';

// CUSTOM IMPORTS

export const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export const Form = styled(Unform)`
  padding: 0 16px;
`;

export const Input = styled.TextInput`
  border: 1px #00000033;
  height: 46px;
  border-radius: 4px;
  padding: 8px;
`;

export const InputMask = styled(TextInputMask)`
  border: 1px #00000033;
  height: 46px;
  border-radius: 4px;
  padding: 8px;
`;

export const Button = styled.View`
  background-color: #3eb097;
  height: 40px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 16px;
  margin-top: 24px;
  margin-left: 80px;
`;

export const ButtonText = styled.Text`
  font-size: 14;
  color: #f3f3f3;
  font-weight: bold;
`;

export const InputLabel = styled.Text`
  margin-bottom: 4px;
  margin-top: 16px;
  color: #0b6e58;
  font-size: 12px;
`;
