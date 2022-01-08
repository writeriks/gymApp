import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

interface SaveButtonProps {
  title: string,
  navigation: () => void,
}

const SaveButton: React.FC<SaveButtonProps> = ({ title, navigation }) => {
  const styles = StyleSheet.create({
    saveButton: {
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      width: '100%',
      height: 90,
      backgroundColor: 'rgb(10, 132, 255)',
    },
    saveButtonText: {
      fontSize: 24,
      lineHeight: 30,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  }
  )
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor='rgb(0, 122, 255)'
      style={styles.saveButton}
      /* @ts-ignore */
      onPress={() => navigation.goBack()} >
      <Text style={styles.saveButtonText}>
        {title}
      </Text>
    </TouchableHighlight>
  )
}

export default SaveButton
