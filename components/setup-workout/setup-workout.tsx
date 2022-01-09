import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderBar from '../util/header-bar/header-bar';
import SaveButton from '../util/save-button/save-button';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { workoutTypes } from '../../types/types';
import StraightWorkout from './straight-workout';
import SupersetWorkout from './superset-workout';
import IntervalWorkout from './interval-workout copy';

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
  return (
    <View style={styles.mainView}>
      <Tab.Navigator>
        <Tab.Screen name={workoutTypes.straight} component={StraightWorkout} />
        <Tab.Screen name={workoutTypes.superset} component={SupersetWorkout} />
        <Tab.Screen name={workoutTypes.interval} component={IntervalWorkout} />
      </Tab.Navigator>
      <SaveButton title='Save Workout' navigation={navigation} />
    </View>
  );
};

export default SetupWorkout;
