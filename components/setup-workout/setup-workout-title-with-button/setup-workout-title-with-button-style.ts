import { StyleSheet } from "react-native";

export const setupWorkoutTitleWithButtonStyle = StyleSheet.create({
  setContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  setsText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  addButton: {
    paddingRight: 10,
    fontSize: 20,
    color: '#4181ff'
  }
})