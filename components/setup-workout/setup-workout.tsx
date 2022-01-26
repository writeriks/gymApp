import React, { useEffect } from 'react';
import { View, StyleSheet, AppState } from 'react-native';
import { useIsFocused } from '@react-navigation/native'

import SaveButton from '../util/save-button/save-button';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import StraightWorkout from './straight-workout/straight-workout';
import SupersetWorkout from './superset-workout/superset-workout';
import IntervalWorkout from './interval-workout/interval-workout';

import { WorkoutTabsType } from '../../types/types';

interface SetupWorkoutProps {
  navigation: () => void;
}
const Tab = createMaterialTopTabNavigator();

const SetupWorkout: React.FC<SetupWorkoutProps> = ({ navigation }) => {
  const styles = StyleSheet.create({
    mainView: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column'
    },
  });

  const isFocused = useIsFocused()

  useEffect(() => {
    console.log("focused", isFocused)
  }, [isFocused])

  return (
    <View style={styles.mainView}>
      <Tab.Navigator>
        <Tab.Screen name={WorkoutTabsType.straight} component={StraightWorkout} />
        <Tab.Screen name={WorkoutTabsType.superset} component={SupersetWorkout} />
        <Tab.Screen name={WorkoutTabsType.interval} component={IntervalWorkout} />
      </Tab.Navigator>
      <SaveButton title='Save Workout' navigation={navigation} />
    </View>
  );
};

export default SetupWorkout;
