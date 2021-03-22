import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

import CalendarStack from '~/routes/stacks/CalendarStack';
import About from '../screens/About';
import colors from '~/styles/colors';
// import { SideMenuBar } from '~/components/SideMenuBar';
import { Container, Header, Avatar, UserName } from './styles';
import noAvatar from '~/assets/UserHarold.jpg';

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#fafafa',
  },
});

function CustomDrawerContent(props) {
  return (
    <Container>
      <View>
        <Header>
          <Avatar source={noAvatar} />
          <UserName>Victor Batisttete</UserName>
        </Header>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {}}
        labelStyle={{ color: colors.primaryDark }}
        icon={() => {
          <Icon name="info" size={24} color={colors.primaryDark} />;
        }}
      />
    </Container>
  );
}

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="About"
        drawerStyle={styles.drawerStyle}
        drawerContentOptions={{
          labelStyle: { color: colors.primaryDark },
          activeTintColor: '#50E3C2',
        }}
      >
        <Drawer.Screen
          name="Sobre"
          component={About}
          options={{
            drawerIcon: () => (
              <MaterialIcons name="info" size={24} color={colors.primaryDark} />
            ),
          }}
        />
        <Drawer.Screen
          name="Calendário"
          component={CalendarStack}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="calendar"
                size={24}
                color={colors.primaryDark}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
