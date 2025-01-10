import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { Profile } from "../screens/Profile";
import { Settings } from "../screens/Settings";
import { NotFound } from "../screens/NotFound";
import { HomeTabs } from "./HomeTabs";
import { SignIn } from "../screens/SignIn";
import { AuthFunctionsContext, SignInContext } from "../contexts/AuthContext";
import { SignOutDialog } from "../components/SignOutDialog";
import { Workout } from "../navigation/WorkoutTabs";
import { Exercise } from "./ExerciseTabs";
import { Superset } from "./SupersetTabs";

const useIsSignedIn = () => React.useContext(SignInContext);
const useIsSignedOut = () => !useIsSignedIn();

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      if: useIsSignedIn,
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
      initialParams: {
        screen: "Home",
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
    Workout: {
      screen: Workout,
      options: ({ route }) => {
        return {
          // @ts-ignore
          title: route.params.workoutName,
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

    NotFound: {
      screen: NotFound,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
