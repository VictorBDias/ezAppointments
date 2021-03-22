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

export const EditProfileButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${colors.accent};
`;

export const Itens = styled.View`
  padding: 0 8px;
  margin-top: 16px;
  flex: 1;
`;

export const NavigationItens = styled.View`
  flex: 1;
`;
