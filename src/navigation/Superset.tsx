import { StaticScreenProps } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Stats } from "../screens/Stats";
import { History } from "../screens/History";
import { SupersetParams } from "../parameters/WorkoutParams";

type TabsParamList = {
  Stats: SupersetParams;
  History: SupersetParams;
};

const SupersetTabs = createMaterialTopTabNavigator<TabsParamList>();

export type SupersetProps = StaticScreenProps<SupersetParams>;

export const Superset = ({ route }: SupersetProps) => {
  return (
    <SupersetTabs.Navigator
      screenOptions={{ title: route.params.supersetName }}
    >
      <SupersetTabs.Screen
        name="Stats"
        component={Stats}
        options={{ tabBarLabel: "Stats" }}
        initialParams={{ supersetName: route.params.supersetName }}
      />
      <SupersetTabs.Screen
        name="History"
        component={History}
        options={{ tabBarLabel: "History" }}
        initialParams={{ supersetName: route.params.supersetName }}
      />
    </SupersetTabs.Navigator>
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
