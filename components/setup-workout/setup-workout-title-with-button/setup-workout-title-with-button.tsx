import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import setupWorkoutHelper from '../setup-workout-helper';

import { setupWorkoutTitleWithButtonStyle } from './setup-workout-title-with-button-style';

export interface TitleWithButtonProps {
  titleName: string,
}

const SetupworkoutTitleWithButton: React.FC<TitleWithButtonProps> = ({ titleName }) => {
  return (
    <View style={setupWorkoutTitleWithButtonStyle.setContainer}>
      <Text style={setupWorkoutTitleWithButtonStyle.setsText}>
        {titleName}
      </Text>
      <TouchableOpacity
        activeOpacity={0.6}
        /* @ts-ignore */
        onPress={() => setupWorkoutHelper.appendNewStraightWorkoutSetRow()}>
        <Text style={setupWorkoutTitleWithButtonStyle.addButton}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export default SetupworkoutTitleWithButton;
