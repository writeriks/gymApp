import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import straightWorkoutHelper from '../straight-workout-helper';

import { straightWorkoutTitleWithButtonStyle } from './straight-workout-title-with-button-style';

export interface StraightWorkoutTitleWithButtonProps {
  titleName: string,
}

const StraightworkoutTitleWithButton: React.FC<StraightWorkoutTitleWithButtonProps> = ({ titleName }) => {
  return (
    <View style={straightWorkoutTitleWithButtonStyle.setContainer}>
      <Text style={straightWorkoutTitleWithButtonStyle.setsText}>
        {titleName}
      </Text>
      <TouchableOpacity
        activeOpacity={0.6}
        /* @ts-ignore */
        onPress={() => straightWorkoutHelper.appendNewStraightWorkoutSetRow()}>
        <Text style={straightWorkoutTitleWithButtonStyle.addButton}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export default StraightworkoutTitleWithButton;
