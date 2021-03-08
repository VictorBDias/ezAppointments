import React from 'react';
import {
  Header as NativeHeader,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base';

// CUSTOM IMPORTS
import { colors } from '~/styles';
import { Container } from './styles';

const Header = ({ title, iconLeft, openSideMenu, right }) => {
  return (
    <Container>
      <NativeHeader
        style={{ backgroundColor: '#fff' }}
        androidStatusBarColor={colors.whiteSmoke}
        iosBarStyle="dark-content"
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
        <Right>{right}</Right>
      </NativeHeader>
    </Container>
  );
};

export default Header;
