import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import Calendar from '~/screens/Calendar';
import CreateAppointment from '~/screens/Calendar/CreateAppointment';
import UserList from '~/screens/Calendar/UserList';

// CUSTOM IMPORTS
import { colors } from '~/styles';

const Stack = createStackNavigator();

const CalendarStack = ({ navigation }) => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.whiteSmoke,
          },
          headerStyle: {
            elevation: 0,
          },
          headerTintColor: colors.black,
          headerTitleStyle: {
            color: colors.black70,
          },
        }}
      >
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{
            title: 'Calendário',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CreateAppointment"
          component={CreateAppointment}
          options={{
            title: 'Adicionar Agendamento',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{
            title: 'Adicionar Agendamento',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default CalendarStack;
