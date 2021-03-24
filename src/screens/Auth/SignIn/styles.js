import styled from 'styled-components/native';
import { Form as RocketForm } from '@unform/mobile';

import { colors } from '~/styles';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 24px;
`;

export const Logo = styled.Image`
  width: 282px;
  height: 65px;
`;

export const Form = styled(RocketForm)`
  align-self: stretch;
  margin-top: 50px;
`;

export const InputLabel = styled.Text`
  margin-bottom: 4px;
  margin-top: 16px;
  color: #0b6e58;
  font-size: 12px;
`;
export const Input = styled.TextInput`
  border: 1px #00000033;
  height: 46px;
  border-radius: 4px;
  padding: 8px;
`;

export const SubmitButton = styled.View`
  background-color: #3eb097;
  margin-top: 24px;
  height: 40px;
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

export const SignLink = styled.View`
  background-color: #000;
  margin-top: 8px;
  height: 40px;
  width: 320px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 16px;
`;
