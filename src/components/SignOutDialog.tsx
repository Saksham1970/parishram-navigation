import { Ionicons } from "@expo/vector-icons";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type SignOutDialogProps = {
  signOut: () => Promise<void>;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
};

export const SignOutDialog = ({ signOut, navigation }: SignOutDialogProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignOut = () => {
    setModalVisible(false);
    signOut();
    navigation.popToTop();
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Ionicons name="log-out-outline" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Sign Out</Text>
            <Text style={styles.modalText}>
              Are you sure you want to sign out?
            </Text>

            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonTextCancel}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonSignOut]}
                onPress={handleSignOut}
              >
                <Text style={styles.buttonTextSignOut}>Sign Out</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles for our components
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  modalText: {
    marginBottom: 24,
    textAlign: "center",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    borderRadius: 8,
    padding: 12,
    width: "45%",
  },
  buttonCancel: {
    backgroundColor: "#e5e5e5",
  },
  buttonSignOut: {
    backgroundColor: "#ff3b30",
  },
  buttonText: {
    fontSize: 16,
    color: "black",
  },
  buttonTextCancel: {
    textAlign: "center",
    color: "black",
    fontSize: 16,
  },
  buttonTextSignOut: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
