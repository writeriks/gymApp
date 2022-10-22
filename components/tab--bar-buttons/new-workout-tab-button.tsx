import React from "react";
import { Image, View } from "react-native";
import { tabBarStyles } from "../tab-bar/tab-bar-styles";

const NewWorkoutTabButton = () => {
  return (
    <>
      <View style={tabBarStyles.newWorkoutForTabView}>
        <Image
          style={tabBarStyles.newWorkoutForTabImage}
          source={require("../../assets/gym-app-icons/workout.png")}
        />
      </View>
    </>
  );
};

export default NewWorkoutTabButton;
