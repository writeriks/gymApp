import { ParamListBase, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { TabNames } from '../../types/types';

interface TabBarProps {
  route: RouteProp<ParamListBase, string>,
  focused: boolean,
  size: number
}
const historyIconSrc = '../../assets/gym-app-icons/history-tab.jpg';
const workoutIconSrc = '../../assets/gym-app-icons/workout.png';
const timerIconSrc = '../../assets/gym-app-icons/timer.png';

const TabBar: React.FC<TabBarProps> = ({ route, focused, size }) => {
  const getTabBarElement = () => {
    let iconComponent = null;

    switch (route.name) {
      case TabNames.history:
        iconComponent = focused ?
          <Image style={{ width: size, height: size, tintColor: '#2fa6ff' }} source={require(historyIconSrc)} />
          : <Image style={{ width: size, height: size }} source={require(historyIconSrc)} />;
        break;
      case TabNames.newWorkout:
        iconComponent = focused ?
          <Image style={{ width: size, height: size, tintColor: '#2fa6ff' }} source={require(workoutIconSrc)} />
          : <Image style={{ width: size, height: size }} source={require(workoutIconSrc)} />;
        break;
      case TabNames.timer:
        iconComponent = focused ?
          <Image style={{ width: size, height: size, tintColor: '#2fa6ff' }} source={require(timerIconSrc)} />
          : <Image style={{ width: size, height: size }} source={require(timerIconSrc)} />;
        break;
      default:
        break;
    }
    return iconComponent;
  };

  return getTabBarElement();
};

export default TabBar;
