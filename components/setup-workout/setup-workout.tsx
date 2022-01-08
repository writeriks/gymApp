import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

interface SetupWorkoutProps {
  navigation: () => void;
}

const SetupWorkout: React.FC<SetupWorkoutProps> = ({ navigation }) => {
  const styles = StyleSheet.create({
    mainView: {
      display: 'flex',
      height: '100%',
    },
    button: {
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      width: '100%',
      height: 90,
      backgroundColor: 'blue',
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  return (
    <View style={styles.mainView}>
      <Text >
        New Workout
      </Text>
      {/* @ts-ignore */}
      <Pressable style={styles.button} onPress={() => navigation.goBack()} >
        <Text style={styles.buttonText}>Save Workout</Text>
      </Pressable>
    </View>
  );
};

export default SetupWorkout;
