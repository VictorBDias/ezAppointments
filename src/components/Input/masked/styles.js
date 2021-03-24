import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const InputLabel = styled.Text`
  margin-bottom: 4px;
  margin-top: 16px;
  color: #0b6e58;
  font-size: 12px;
`;

export const InputMask = styled(TextInputMask)`
  border: 1px #00000033;
  height: 46px;
  border-radius: 4px;
  padding: 8px;
`;
