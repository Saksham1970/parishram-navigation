import { StyleSheet, View, Text } from "react-native";
import { ExerciseProps } from "../navigation/ExerciseTabs";
import { SupersetProps } from "../navigation/SupersetTabs";

export const Instructions = ({ route }: ExerciseProps | SupersetProps) => {
  let name: string;
  if ("exerciseName" in route.params) {
    name = route.params.exerciseName;
  } else {
    name = route.params.supersetName;
  }

  return (
    <View style={styles.container}>
      <Text>ExerciseInstructions of {name}</Text>
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
