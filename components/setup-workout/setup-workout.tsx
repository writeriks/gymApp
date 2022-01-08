import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderBar from '../util/header-bar/header-bar';
import SaveButton from '../util/save-button/save-button';

interface SetupWorkoutProps {
  navigation: () => void;
}

const SetupWorkout: React.FC<SetupWorkoutProps> = ({ navigation }) => {
  const styles = StyleSheet.create({
    mainView: {
      display: 'flex',
      height: '100%',
    },

  });
  return (
    <View style={styles.mainView}>
      <HeaderBar
        title='New Workout'
        shouldHaveCloseIcon
        navigation={navigation}
      />
      <SaveButton title='Save Workout' navigation={navigation} />
    </View>
  );
};

export default SetupWorkout;
