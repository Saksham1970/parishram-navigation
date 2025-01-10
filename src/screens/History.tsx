import { StyleSheet, View, Text } from "react-native";
import { ExerciseProps } from "../navigation/Exercise";
import { SupersetProps } from "../navigation/Superset";
import { RoutineProps } from "../navigation/Routine";

export const History = ({
  route,
}: ExerciseProps | SupersetProps | RoutineProps) => {
  let name: string;
  if ("exerciseName" in route.params) {
    name = route.params.exerciseName;
  } else if ("supersetName" in route.params) {
    name = route.params.supersetName;
  } else {
    name = route.params.routineName;
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
