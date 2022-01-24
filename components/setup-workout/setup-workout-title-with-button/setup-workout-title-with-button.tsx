import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

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
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor='white'
        /* @ts-ignore */
        onPress={() => setupWorkoutHelper.appendSetRow()}>
        <Text style={setupWorkoutTitleWithButtonStyle.addButton}>
          Add
        </Text>
      </TouchableHighlight>
    </View>
  )
};

export default SetupworkoutTitleWithButton;
