import { StyleSheet } from "react-native";

export const setupWorkoutTitleWithButtonStyle = StyleSheet.create({
  setContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  setsText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  addButton: {
    paddingRight: 10,
    fontSize: 30,
    color: '#4181ff'
  }
})