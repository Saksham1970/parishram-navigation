import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Stats } from "../screens/Stats";
import { History } from "../screens/History";
import { WorkoutTab } from "../screens/Workout";
import { WorkoutParams } from "../parameters/WorkoutParams";
import { StaticScreenProps } from "@react-navigation/native";

type TabsParamList = {
  Routine: WorkoutParams;
  Stats: WorkoutParams;
  History: WorkoutParams;
};

const WorkoutTabs = createMaterialTopTabNavigator<TabsParamList>();

export type WorkoutProps = StaticScreenProps<WorkoutParams>;

export const Workout = ({ route }: WorkoutProps) => {
  return (
    <WorkoutTabs.Navigator screenOptions={{ title: route.params.workoutName }}>
      <WorkoutTabs.Screen
        name="Routine"
        component={WorkoutTab}
        options={{ tabBarLabel: "Routine" }}
        initialParams={{ workoutName: route.params.workoutName }}
      />
      <WorkoutTabs.Screen
        name="Stats"
        component={Stats}
        options={{ tabBarLabel: "Stats" }}
        initialParams={{ workoutName: route.params.workoutName }}
      />
      <WorkoutTabs.Screen
        name="History"
        component={History}
        options={{ tabBarLabel: "History" }}
        initialParams={{ workoutName: route.params.workoutName }}
      />
    </WorkoutTabs.Navigator>
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
