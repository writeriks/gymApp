import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import straightWorkoutHelper from '../straight-workout-helper';

import { straightworkoutRowStyle } from './straight-workout-row-style';
import { NewStraightWorkout } from '../../../store/reducers/new-workout-reducer/new-workout-reducer-types';

export interface StraightWorkoutSetRowProps {
  newWorkoutSet: NewStraightWorkout,
  index: number
}

const StraightWorkoutSetRow: React.FC<StraightWorkoutSetRowProps> = ({ newWorkoutSet, index }) => {

  const weightValue = newWorkoutSet.weight || '';
  const repeatValue = newWorkoutSet.repeat || '';

  return (
    <View style={straightworkoutRowStyle.workoutRowContainer}>

      <View style={straightworkoutRowStyle.workoutRowSetNumberContainer}>
        <Text
          style={straightworkoutRowStyle.workoutRowSetNumber}>
          {index + 1}
        </Text>
      </View>

      <View style={straightworkoutRowStyle.workoutRowInputContainer}>
        <TextInput
          keyboardType='number-pad'
          style={straightworkoutRowStyle.workoutRowTextField}
          value={weightValue}
          placeholder='weight'
          onChange={(e) => straightWorkoutHelper.modifyNewStraightWorkoutSetWeight(e.nativeEvent.text, newWorkoutSet.id)} />
        <TextInput
          keyboardType='number-pad'
          style={straightworkoutRowStyle.workoutRowTextField}
          value={repeatValue}
          placeholder='repeats'
          onChange={(e) => straightWorkoutHelper.modifyNewStraightWorkoutSetRepeat(e.nativeEvent.text, newWorkoutSet.id)} />
      </View>

      <TouchableOpacity
        style={straightworkoutRowStyle.removeIconContainer}
        onPress={() => straightWorkoutHelper.removeNewStraightWorkoutSet(newWorkoutSet.id)}>
        <Image
          style={straightworkoutRowStyle.removeIconImage}
          source={require('../../../assets/gym-app-icons/remove-icon.png')} />
      </TouchableOpacity>

    </View>
  );
};

export default StraightWorkoutSetRow;
