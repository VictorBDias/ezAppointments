import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.TouchableOpacity`
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  margin-top: 8px;
`;

export const Name = styled.Text`
  color: ${colors.accent};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
