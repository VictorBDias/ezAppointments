import styled from 'styled-components/native';

// CUSTOM IMPOTS
import { colors } from '~/styles';

export const Container = styled.View`
  height: 100%;
`;

export const Header = styled.View`
  padding: 42px 16px 16px 16px;
  background: #fff;
  elevation: 5;
  margin-bottom: 16px;
`;

export const Avatar = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 24px;
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.text};
  margin-top: 8px;
`;
