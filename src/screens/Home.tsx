import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate("Workout", { workoutName: "Upper" });
        }}
      >
        Upper
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("Workout", { workoutName: "Lower" });
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
