import React from "react";
import { Image, View } from "react-native";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { TabNames } from "../../types/types";
import { tabBarStyles } from "./tab-bar-styles";
import HistoryTabButton from "../tab--bar-buttons/history-tab-button";
import NewWorkoutTabButton from "../tab--bar-buttons/new-workout-tab-button";
import TimerTabButton from "../tab--bar-buttons/timer-tab-button";

interface TabBarProps {
  route: RouteProp<ParamListBase, string>;
  focused: boolean;
  size: number;
}

const TabBar: React.FC<TabBarProps> = ({ route, focused, size }) => {
  const tabBarButtonModals = {
    [TabNames.history]: <HistoryTabButton focused={focused} />,
    [TabNames.newWorkoutForTabIcon]: <NewWorkoutTabButton />,
    [TabNames.timer]: <TimerTabButton focused={focused} />,
  };

  return tabBarButtonModals[route.name];
};

export default TabBar;
