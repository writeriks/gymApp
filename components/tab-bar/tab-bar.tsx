import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
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
  const styles = StyleSheet.create({
    historyTabFocused: {
      width: 35, height: 35, top: 10, tintColor: '#2fa6ff'
    },
    historyTabNotFocused: {
      width: 35, height: 35, top: 10,
    },
    newWorkoutForTabView: {
      width: 90, height: 90, top: 10, borderWidth: 2,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
      backgroundColor: 'orange', display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    newWorkoutForTabImage: {
      width: '70%', height: '70%'
    },
    timerFocused: {
      width: 35, height: 35, top: 10, tintColor: '#2fa6ff'
    },
    timerNotFocused: {
      width: 35, height: 35, top: 10,
    }
  });
  const getTabBarElement = () => {
    let iconComponent = null;

    switch (route.name) {
      case TabNames.history:
        iconComponent = focused ?
          <Image style={styles.historyTabFocused} source={require(historyIconSrc)} />
          : <Image style={styles.historyTabNotFocused} source={require(historyIconSrc)} />;
        break;
      case TabNames.newWorkoutForTabIcon:
        iconComponent = <View style={styles.newWorkoutForTabView}>
          <Image style={styles.newWorkoutForTabImage} source={require(workoutIconSrc)} />
        </View>
        break;
      case TabNames.timer:
        iconComponent = focused ?
          <Image style={styles.timerFocused} source={require(timerIconSrc)} />
          : <Image style={styles.timerNotFocused} source={require(timerIconSrc)} />;
        break;
      default:
        break;
    }
    return iconComponent;
  };

  return getTabBarElement();
};

export default TabBar;
