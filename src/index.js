import 'react-native-gesture-handler';
import { StatusBar, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// CUSTOM IMPORTS
import './config/ReactotronConfig';
import Routes from './routes';
import { colors } from './styles';

export default function App() {
  console.tron.log('hello');
  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
      <Routes />
    </>
  );
}
