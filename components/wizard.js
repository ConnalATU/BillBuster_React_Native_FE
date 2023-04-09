import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Wizard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{ color: "#e71e70", fontSize: 50, fontWeight: "bold", textAlign:"center" }}>
          Which deal type interests you the most?
        </Text>
      </View>
      <View style={styles.btnBox}>
        <View style={styles.btnStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Question", { q1: "green" })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Green Energy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Question", { q1: "cheap" })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Cheapest Price</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Wizard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f1f2",
  },

  box: {
    flex: 2,
    backgroundColor: "#f2f1f2",
    alignItems: "center",
    justifyContent: "center",
  },

  btnBox: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btnStyle: {},
  button: {
    backgroundColor: "#e71e70",
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#f2f1f2",
    fontWeight: "bold",
  },
});
