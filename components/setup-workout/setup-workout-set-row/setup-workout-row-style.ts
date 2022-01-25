import { StyleSheet } from "react-native";


export const setupworkoutRowStyle = StyleSheet.create({
  workoutRowContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
  },
  workoutRowSetNumberContainer: {
    width: 20,
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
    width: "calc(100% - 50px)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  workoutRowTextField: {
    width: "40%",
    height: 30,
    marginLeft: 10,
    paddingLeft: 10,
    border: "1px solid",
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