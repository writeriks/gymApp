import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigationBar from './tab-navigation-bar/tab-navigation-bar';
import SetupWorkout from './setup-workout/setup-workout';

import { TabNames } from '../types/types';

const RootStack = createStackNavigator();

const GymAppMain = () => (
  <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{
        animationEnabled: false,
        headerShown: false,
        presentation: 'modal'
      }}
    >
      <RootStack.Screen name={TabNames.tabs} component={TabNavigationBar} />
      <RootStack.Screen name={TabNames.newWorkout} component={SetupWorkout} options={{ animationEnabled: true }} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default GymAppMain;
