import React from 'react';
import { View } from 'react-native';

// CUSTOM IMPORTS
import {
  Container,
  Header,
  Avatar,
  UserName,
  EditProfileButton,
  ButtonText,
} from './styles';
import noAvatar from '~/assets/noAvatarBig.png';

const SideMenuBar = () => {
  return (
    <Container>
      <View>
        <Header>
          <Avatar source={noAvatar} />

          <UserName>Victor B.</UserName>
          <EditProfileButton onPress={() => {}}>
            <ButtonText>Editar Perfil</ButtonText>
          </EditProfileButton>
        </Header>
      </View>
    </Container>
  );
};

export default SideMenuBar;
