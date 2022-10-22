import React from "react";
import { Image } from "react-native";
import { tabBarStyles } from "../tab-bar/tab-bar-styles";

interface HistoryTabButtonProps {
  focused: boolean;
}

const TimerTabButton: React.FC<HistoryTabButtonProps> = ({ focused }) => {
  return (
    <>
      {focused ? (
        <Image
          style={tabBarStyles.timerFocused}
          source={require("../../assets/gym-app-icons/timer.png")}
        />
      ) : (
        <Image
          style={tabBarStyles.timerNotFocused}
          source={require("../../assets/gym-app-icons/timer.png")}
        />
      )}
    </>
  );
};

export default TimerTabButton;
