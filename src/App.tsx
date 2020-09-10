import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Profile from './pages/Profile';
import { primaryDark, primary, textColor, primaryLight } from './styles/colors';

const Drawer = createDrawerNavigator();

const LightTheme = {
  ...DefaultTheme,
  colors: {
    primary: primary,
    background: primaryLight,
    card: primaryDark,
    text: textColor,
    border: primaryLight,
    notification: primaryDark,
  },
};

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
