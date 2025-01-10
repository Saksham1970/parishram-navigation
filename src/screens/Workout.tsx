import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export const Workout = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate("ProgressingWorkout");
        }}
        style={{ backgroundColor: "pink" }}
      >
        Start Workout
      </Button>
      <Text>Routines</Text>
      <Button
        onPress={() => {
          navigation.navigate("Routine", { routineName: "Upper" });
        }}
      >
        Upper
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("Routine", { routineName: "Lower" });
        }}
      >
        Lower
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
