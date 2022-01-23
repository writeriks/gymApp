import { StyleSheet } from 'react-native'

export const saveButtonStyle = StyleSheet.create({
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
})