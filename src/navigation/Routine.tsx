import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Stats } from "../screens/Stats";
import { History } from "../screens/History";
import { RoutineTab } from "../screens/RoutineTab";
import { RoutineParams } from "../parameters/WorkoutParams";
import { StaticScreenProps } from "@react-navigation/native";

type TabsParamList = {
  RoutineTab: RoutineParams;
  Stats: RoutineParams;
  History: RoutineParams;
};

const RoutineTabs = createMaterialTopTabNavigator<TabsParamList>();

export type RoutineProps = StaticScreenProps<RoutineParams>;

export const Routine = ({ route }: RoutineProps) => {
  return (
    <RoutineTabs.Navigator screenOptions={{ title: route.params.routineName }}>
      <RoutineTabs.Screen
        name="RoutineTab"
        component={RoutineTab}
        options={{ tabBarLabel: "Routine" }}
        initialParams={{ routineName: route.params.routineName }}
      />
      <RoutineTabs.Screen
        name="Stats"
        component={Stats}
        options={{ tabBarLabel: "Stats" }}
        initialParams={{ routineName: route.params.routineName }}
      />
      <RoutineTabs.Screen
        name="History"
        component={History}
        options={{ tabBarLabel: "History" }}
        initialParams={{ routineName: route.params.routineName }}
      />
    </RoutineTabs.Navigator>
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
