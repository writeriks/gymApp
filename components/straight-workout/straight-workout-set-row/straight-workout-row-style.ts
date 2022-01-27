import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;


export const straightworkoutRowStyle = StyleSheet.create({
  workoutRowContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
  },
  workoutRowSetNumberContainer: {
    width: 30,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  workoutRowSetNumber: {
    fontSize: 20,
    fontWeight: "600",
  },
  workoutRowInputContainer: {
    width: windowWidth - 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  workoutRowTextField: {
    width: "40%",
    height: 30,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderRadius: 3,
  },
  removeIconContainer: {
    width: 25,
    height: 25
  },
  removeIconImage: {
    width: 25,
    height: 25
  }
})