import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

import Calendar from '../screens/Calendar';
import About from '../screens/About';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Calendar" component={Calendar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
