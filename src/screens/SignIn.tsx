import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AuthFunctionsContext } from "../contexts/AuthContext";
import { Button } from "@react-navigation/elements";

export const SignIn = () => {
  const authFunctions = useContext(AuthFunctionsContext);

  return (
    <View style={styles.container}>
      <Button onPress={() => authFunctions?.signIn({})}>Sign in</Button>
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
