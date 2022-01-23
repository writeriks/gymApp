import React from 'react';
import { Image, View } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { TabNames } from '../../types/types';
import { tabBarStyles } from './tab-bar-styles';

interface TabBarProps {
  route: RouteProp<ParamListBase, string>,
  focused: boolean,
  size: number
}

const TabBar: React.FC<TabBarProps> = ({ route, focused, size }) => {
  const getTabBarElement = () => {
    let iconComponent = null;

    switch (route.name) {
      case TabNames.history:
        iconComponent = focused ?
          <Image style={tabBarStyles.historyTabFocused} source={require('../../assets/gym-app-icons/history-tab.jpg')} />
          : <Image style={tabBarStyles.historyTabNotFocused} source={require('../../assets/gym-app-icons/history-tab.jpg')} />;
        break;
      case TabNames.newWorkoutForTabIcon:
        iconComponent = <View style={tabBarStyles.newWorkoutForTabView}>
          <Image style={tabBarStyles.newWorkoutForTabImage} source={require('../../assets/gym-app-icons/workout.png')} />
        </View>
        break;
      case TabNames.timer:
        iconComponent = focused ?
          <Image style={tabBarStyles.timerFocused} source={require('../../assets/gym-app-icons/timer.png')} />
          : <Image style={tabBarStyles.timerNotFocused} source={require('../../assets/gym-app-icons/timer.png')} />;
        break;
      default:
        break;
    }
    return iconComponent;
  };

  return getTabBarElement();
};

export default TabBar;
