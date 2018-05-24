import React from 'react';
import { createStackNavigator, StackNavigator } from 'react-navigation';

import MainScreen from './src/Main';
import Config from './src/pages/mine/Config';
import About from './src/pages/mine/About';

const CardStackNavigator = StackNavigator(
  {
    MainTab: { screen: MainScreen },
    ConfigTab: { screen: Config },
    AboutTab: { screen: About },
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null
    })
   }
);

export default CardStackNavigator
