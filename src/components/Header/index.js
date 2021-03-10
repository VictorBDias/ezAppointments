import React from 'react';
import { View } from 'react-native';
import {
  Header as NativeHeader,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

// CUSTOM IMPORTS
import { colors } from '~/styles';

const Header = ({ title, iconLeft, iconRight, edit, openSideMenu, right }) => {
  return (
    <View>
      <NativeHeader
        style={{ backgroundColor: '#fff' }}
        androidStatusBarColor={colors.whiteSmoke}
        noShadow
      >
        <Left>
          <Button transparent light onPress={openSideMenu}>
            <Icon name={iconLeft} />
          </Button>
        </Left>

        <Body>
          <Title style={{ color: colors.text }}>{title}</Title>
        </Body>
        <Right>
          <Button transparent light onPress={edit}>
            <MaterialIcons name={iconRight} size={24} color={colors.black50} />
          </Button>
        </Right>
      </NativeHeader>
    </View>
  );
};

export default Header;
