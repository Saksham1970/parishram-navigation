import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { Profile } from "../screens/Profile";
import { Settings } from "../screens/Settings";
import { Home } from "./Home";
import { SignIn } from "../screens/SignIn";
import { AuthFunctionsContext, SignInContext } from "../contexts/AuthContext";
import { SignOutDialog } from "../components/SignOutDialog";
import { Routine } from "./Routine";
import { Exercise } from "./Exercise";
import { Superset } from "./Superset";
import { ProgressingWorkout } from "../screens/ProgressingWorkout";

const useIsSignedIn = () => React.useContext(SignInContext);
const useIsSignedOut = () => !useIsSignedIn();

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      if: useIsSignedIn,
      screen: Home,
      options: {
        headerShown: false,
      },
      initialParams: {
        screen: "Workout",
      },
    },
    SignIn: {
      if: useIsSignedOut,
      screen: SignIn,
      options: {
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => {
        return {
          headerRight: () => {
            const authContext = React.useContext(AuthFunctionsContext);
            return authContext ? (
              <SignOutDialog
                signOut={authContext.signOut}
                navigation={navigation}
              />
            ) : null;
          },
        };
      },
    },
    Routine: {
      screen: Routine,
      options: ({ route }) => {
        return {
          // @ts-ignore
          title: route.params.routineName,
        };
      },
    },
    Exercise: {
      screen: Exercise,
      options: ({ route }) => {
        return {
          // @ts-ignore
          title: route.params.exerciseName,
        };
      },
    },

    Superset: {
      screen: Superset,
      options: ({ route }) => {
        return {
          // @ts-ignore
          title: route.params.supersetName,
        };
      },
    },

    ProgressingWorkout: {
      screen: ProgressingWorkout,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
