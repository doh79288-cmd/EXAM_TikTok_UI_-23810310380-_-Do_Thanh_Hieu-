import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FollowingScreen from "../screens/FollowingScreen";
import ForYouScreen from "../screens/ForYouScreen";

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen name="Following" component={FollowingScreen} />
      <Tab.Screen name="For You" component={ForYouScreen} />
    </Tab.Navigator>
  );
}