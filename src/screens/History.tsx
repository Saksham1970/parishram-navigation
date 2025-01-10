import { StyleSheet, View, Text } from "react-native";
import { ExerciseProps } from "../navigation/ExerciseTabs";
import { SupersetProps } from "../navigation/SupersetTabs";
import { WorkoutProps } from "../navigation/WorkoutTabs";

export const History = ({
  route,
}: ExerciseProps | SupersetProps | WorkoutProps) => {
  let name: string;
  if ("exerciseName" in route.params) {
    name = route.params.exerciseName;
  } else if ("supersetName" in route.params) {
    name = route.params.supersetName;
  } else {
    name = route.params.workoutName;
  }

  return (
    <View style={styles.container}>
      <Text>ExerciseHistory of {name}</Text>
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
