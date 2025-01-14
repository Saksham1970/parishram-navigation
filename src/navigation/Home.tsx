import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalHistory } from "../screens/GlobalHistory";
import { Workout } from "../screens/Workout";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "../screens/Profile";
import React from "react";
import { TouchableOpacity } from "react-native";

export const Home = createBottomTabNavigator({
  screens: {
    History: {
      screen: GlobalHistory,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="time-outline" size={size} color={color} />
        ),
      },
    },

    Workout: {
      screen: Workout,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="barbell-sharp" size={size} color={color} />
        ),
      },
    },

    Profile: {
      screen: Profile,
      options: ({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-outline" size={size} color={color} />
        ),

        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="settings-outline" size={24} color="black" />
          </TouchableOpacity>
        ),
      }),
    },
  },
});
