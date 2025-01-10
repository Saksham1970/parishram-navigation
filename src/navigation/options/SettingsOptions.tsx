import React, { useContext, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthFunctionsContext } from "../../contexts/AuthContext";

export const SettingsScreenOptions = () => {
  const authFunctions = useContext(AuthFunctionsContext);

  if (!authFunctions) {
    throw new Error("AuthFunctionsContext not provided.");
  }

  const handleSignOut = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            await authFunctions.signOut();
          },
        },
      ],
      { cancelable: true }
    );
  };

  return {
    headerRight: () => (
      <TouchableOpacity onPress={handleSignOut}>
        <Ionicons name="log-out-outline" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};
