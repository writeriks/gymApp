import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WorkoutHistory from './workout-history/workout-history';
import SetupWorkout from './setup-workout/setup-workout';
import { TabNames } from '../types/types';
import TabBar from './tab-bar/tab-bar';
import Timer from './timer/timer';
import { Button } from 'react-native';


const Tab = createBottomTabNavigator();

const GymAppMain = () => (
  <NavigationContainer>
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size }) => <TabBar route={route} focused={focused} size={size} />,

      tabBarActiveTintColor: '#2fa6ff',
      tabBarInactiveTintColor: 'gray',
    })} >
      <Tab.Screen name={TabNames.history} component={WorkoutHistory} options={{
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Add"
            color="#00cc00"
          />
        ),
      }} />
      <Tab.Screen name={TabNames.newWorkout} component={SetupWorkout} />
      <Tab.Screen name={TabNames.timer} component={Timer} />
    </Tab.Navigator>
  </NavigationContainer >
);

export default GymAppMain;
