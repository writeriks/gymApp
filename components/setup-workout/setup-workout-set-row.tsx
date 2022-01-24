import React from 'react';
import { TextInput, View } from 'react-native';
import { NewWorkoutSet } from '../../store/reducers/new-workout-reducer/new-workout-reducer-types';

export interface SetupWorkoutSetRowProps {
  newWorkoutSet: NewWorkoutSet
}

const SetupWorkoutSetRow: React.FC<SetupWorkoutSetRowProps> = ({ newWorkoutSet }) => {
  return (
    <View>
      <TextInput value={newWorkoutSet.weight} placeholder='weight' />
      <TextInput value={newWorkoutSet.repeat} placeholder='repeats' />
    </View>
  );
};

export default SetupWorkoutSetRow;
