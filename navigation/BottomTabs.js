import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TopTabs from "./TopTabs";
import CommentsScreen from "../screens/CommentsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      
      <Tab.Screen
        name="Home"
        component={TopTabs}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}