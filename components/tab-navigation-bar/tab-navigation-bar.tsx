
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WorkoutHistory from '../workout-history/workout-history';

import { TabNames } from '../../types/types';
import TabBar from '../tab-bar/tab-bar';
import Timer from '../timer/timer';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
const tempModalComponent = () => <View style={{ flex: 1, backgroundColor: 'red' }} />;

const TabNavigationBar = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size }) => <TabBar route={route} focused={focused} size={size} />,
      tabBarActiveTintColor: '#2fa6ff',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor: 'red' }
    })}>
      <Tab.Screen name={TabNames.history} component={WorkoutHistory} />
      <Tab.Screen name={TabNames.newWorkoutForTabIcon} component={tempModalComponent}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate(TabNames.newWorkout);
          },
        })}
      />
      <Tab.Screen name={TabNames.timer} component={Timer} />
    </Tab.Navigator>
  );
};

export default TabNavigationBar;
