import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Stats } from "../screens/Stats";
import { History } from "../screens/History";
import { Instructions } from "../screens/Instuctions";
import { ExerciseParams } from "../parameters/WorkoutParams";
import { StaticScreenProps } from "@react-navigation/native";

type TabsParamList = {
  Stats: ExerciseParams;
  History: ExerciseParams;
  Instructions: ExerciseParams;
};

const ExerciseTabs = createMaterialTopTabNavigator<TabsParamList>();

export type ExerciseProps = StaticScreenProps<ExerciseParams>;

export const Exercise = ({ route }: ExerciseProps) => {
  return (
    <ExerciseTabs.Navigator
      screenOptions={{ title: route.params.exerciseName }}
    >
      <ExerciseTabs.Screen
        name="Stats"
        component={Stats}
        options={{ tabBarLabel: "Stats" }}
        initialParams={{ exerciseName: route.params.exerciseName }}
      />
      <ExerciseTabs.Screen
        name="History"
        component={History}
        options={{ tabBarLabel: "History" }}
        initialParams={{ exerciseName: route.params.exerciseName }}
      />
      <ExerciseTabs.Screen
        name="Instructions"
        component={Instructions}
        options={{ tabBarLabel: "Instructions" }}
        initialParams={{ exerciseName: route.params.exerciseName }}
      />
    </ExerciseTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
