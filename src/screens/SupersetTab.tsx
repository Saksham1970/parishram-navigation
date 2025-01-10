import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import { SupersetProps } from "../navigation/Superset";

export const SupersetTab = ({ route }: SupersetProps) => {
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
            exerciseName: "Tricep Extensions",
          });
        }}
      >
        Tricep Extensions
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
