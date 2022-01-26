import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import { saveButtonStyle } from './save-button-style'

interface SaveButtonProps {
  title: string,
  navigation: () => void,
}

const SaveButton: React.FC<SaveButtonProps> = ({ title, navigation }) => {
  const handleSaveButtonPress = () => {
    // @ts-expect-error
    navigation.goBack()
  }

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor='rgb(0, 122, 255)'
      style={saveButtonStyle.saveButton}
      /* @ts-ignore */
      onPress={handleSaveButtonPress} >
      <Text style={saveButtonStyle.saveButtonText}>
        {title}
      </Text>
    </TouchableHighlight >
  )
}

export default SaveButton
