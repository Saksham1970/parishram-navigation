import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import { Assets as NavigationAssets } from "@react-navigation/elements";

import * as React from "react";
import * as SplashScreen from "expo-splash-screen";

import { Navigation } from "./navigation/Navigation";
import {
  AuthFunctionsContext,
  useAuth,
  SignInContext,
} from "./contexts/AuthContext";

SplashScreen.preventAutoHideAsync();

async function loadAssets() {
  try {
    await Font.loadAsync({ ...Ionicons.font });
    await Asset.loadAsync([...NavigationAssets]);
  } catch (error) {
    console.error("Failed to load assets:", error);
    throw error;
  }
}

export function App() {
  const { state, authFunctions } = useAuth();

  React.useEffect(() => {
    loadAssets().catch((error) => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (state.isLoading) return null;

  return (
    <AuthFunctionsContext.Provider value={authFunctions}>
      <SignInContext.Provider value={state.userToken != null}>
        <Navigation onReady={() => SplashScreen.hideAsync()} />
      </SignInContext.Provider>
    </AuthFunctionsContext.Provider>
  );
}
