import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import setupWorkoutHelper from '../setup-workout-helper';

import { setupworkoutRowStyle } from './setup-workout-row-style';
import { NewWorkoutSet } from '../../../store/reducers/new-workout-reducer/new-workout-reducer-types';
import { useDispatch } from 'react-redux';

export interface SetupWorkoutSetRowProps {
  newWorkoutSet: NewWorkoutSet,
  index: number
}

const SetupWorkoutSetRow: React.FC<SetupWorkoutSetRowProps> = ({ newWorkoutSet, index }) => {
  const dispatch = useDispatch();

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
          keyboardType='numeric'
          style={setupworkoutRowStyle.workoutRowTextField}
          value={newWorkoutSet.weight || ''}
          placeholder='weight' />
        <TextInput
          keyboardType='numeric'
          style={setupworkoutRowStyle.workoutRowTextField}
          value={newWorkoutSet.repeat || ''}
          placeholder='repeats'
          onChange={(e) => setupWorkoutHelper.modifyRepeat(e.nativeEvent.text, newWorkoutSet.id)} />
      </View>

      <TouchableOpacity
        style={setupworkoutRowStyle.removeIconContainer}
        onPress={() => setupWorkoutHelper.removeWorkoutSet(newWorkoutSet.id)}>
        <Image
          style={setupworkoutRowStyle.removeIconImage}
          source={require('../../../assets/gym-app-icons/remove-icon.png')} />
      </TouchableOpacity>

    </View>
  );
};

export default SetupWorkoutSetRow;
