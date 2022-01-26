import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import setupWorkoutHelper from '../setup-workout-helper';

import { setupworkoutRowStyle } from './setup-workout-row-style';
import { NewStraightWorkout } from '../../../store/reducers/new-workout-reducer/new-workout-reducer-types';

export interface SetupWorkoutSetRowProps {
  newWorkoutSet: NewStraightWorkout,
  index: number
}

const SetupWorkoutSetRow: React.FC<SetupWorkoutSetRowProps> = ({ newWorkoutSet, index }) => {

  const weightValue = newWorkoutSet.weight || '';
  const repeatValue = newWorkoutSet.repeat || '';

  return (
    <View style={setupworkoutRowStyle.workoutRowContainer}>

      <View style={setupworkoutRowStyle.workoutRowSetNumberContainer}>
        <Text
          style={setupworkoutRowStyle.workoutRowSetNumber}>
          {index + 1}
        </Text>
      </View>

      <View style={setupworkoutRowStyle.workoutRowInputContainer}>
        <TextInput
          keyboardType='number-pad'
          style={setupworkoutRowStyle.workoutRowTextField}
          value={weightValue}
          placeholder='weight'
          onChange={(e) => setupWorkoutHelper.modifyNewStraightWorkoutSetWeight(e.nativeEvent.text, newWorkoutSet.id)} />
        <TextInput
          keyboardType='number-pad'
          style={setupworkoutRowStyle.workoutRowTextField}
          value={repeatValue}
          placeholder='repeats'
          onChange={(e) => setupWorkoutHelper.modifyNewStraightWorkoutSetRepeat(e.nativeEvent.text, newWorkoutSet.id)} />
      </View>

      <TouchableOpacity
        style={setupworkoutRowStyle.removeIconContainer}
        onPress={() => setupWorkoutHelper.removeNewStraightWorkoutSet(newWorkoutSet.id)}>
        <Image
          style={setupworkoutRowStyle.removeIconImage}
          source={require('../../../assets/gym-app-icons/remove-icon.png')} />
      </TouchableOpacity>

    </View>
  );
};

export default SetupWorkoutSetRow;
