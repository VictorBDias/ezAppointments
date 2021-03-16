import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

import CalendarStack from '~/routes/stacks/CalendarStack';
import About from '../screens/About';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen name="Sobre" component={About} />
        <Drawer.Screen name="Calendário" component={CalendarStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
