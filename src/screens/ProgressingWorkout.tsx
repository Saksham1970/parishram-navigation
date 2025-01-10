import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from "react-native";
import { RootStackParamList } from "../navigation/Navigation";

export const ProgressingWorkout = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>ProgressingWorkout</Text>
      <Button
        onPress={() => {
          // Save workout info
          // Show stats
          alert("Workout saved! here are your non existent stats");
          navigation.popTo("Home", { screen: "History" });
        }}
      >
        Finish Workout
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
