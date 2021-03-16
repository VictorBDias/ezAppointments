import styled from 'styled-components/native';
import { Form as Unform } from '@unform/mobile';

// CUSTOM IMPORTS

export const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export const Form = styled(Unform)`
  padding: 0 16px;
`;

export const Input = styled.TextInput`
  margin-top: 16px;
`;

export const Button = styled.View`
  background-color: #3eb097;
  height: 40px;
  width: 160px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 14;
  color: #f3f3f3;
  font-weight: bold;
`;
