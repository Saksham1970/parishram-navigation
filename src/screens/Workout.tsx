import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import { WorkoutProps } from "../navigation/WorkoutTabs";

export const WorkoutTab = ({ route }: WorkoutProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate("Exercise", {
            exerciseName: "Bicep preacher Curls",
          });
        }}
      >
        Bicep preacher Curls
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("Exercise", {
            exerciseName: "Leg Extensions",
          });
        }}
      >
        Leg Extensions
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("Superset", {
            supersetName: "Biceps SS Triceps",
          });
        }}
      >
        Biceps SS Triceps
      </Button>
    </View>
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
