import React from "react";
import { Image } from "react-native";
import { tabBarStyles } from "../tab-bar/tab-bar-styles";

interface HistoryTabButtonProps {
  focused: boolean;
}

const HistoryTabButton: React.FC<HistoryTabButtonProps> = ({ focused }) => {
  return (
    <>
      {focused ? (
        <Image
          style={tabBarStyles.historyTabFocused}
          source={require("../../assets/gym-app-icons/history-tab.jpg")}
        />
      ) : (
        <Image
          style={tabBarStyles.historyTabNotFocused}
          source={require("../../assets/gym-app-icons/history-tab.jpg")}
        />
      )}
    </>
  );
};

export default HistoryTabButton;
