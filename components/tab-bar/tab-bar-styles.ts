import React from "react";
import { StyleSheet } from "react-native";

export const tabBarStyles = StyleSheet.create({
  historyTabFocused: {
    width: 35,
    height: 35,
    top: 10,
    tintColor: "#2fa6ff",
  },
  historyTabNotFocused: {
    width: 35,
    height: 35,
    top: 10,
  },
  newWorkoutForTabView: {
    width: 100,
    height: 100,
    top: 10,
    borderWidth: 1,
    borderColor: "white",
    borderTopColor: "rgb(216, 216, 216)",
    borderRadius: 50,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  newWorkoutForTabImage: {
    width: "70%",
    height: "70%",
  },
  timerFocused: {
    width: 35,
    height: 35,
    top: 10,
    tintColor: "#2fa6ff",
  },
  timerNotFocused: {
    width: 35,
    height: 35,
    top: 10,
  },
});
