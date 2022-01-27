import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const straightWorkoutStyle = StyleSheet.create({
  mainView: {
    width: '100%',
    height: windowHeight - 200,
    padding: 10,
  },
  scrollView: {
    paddingTop: 10
  },
  workoutTitleContainer: {
    height: 40,
    marginTop: 30,
  },
  workoutTitleInput: {
    height: "100%",
    fontSize: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderRadius: 3,
    alignContent: "flex-start",
    paddingLeft: 10,
  },
})