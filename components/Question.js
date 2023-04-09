import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const Question = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{ color: "#e71e70", fontSize: 60, fontWeight: "bold" }}>
          Pre-Pay or
        </Text>
        <Text style={{ color: "#e71e70", fontSize: 60, fontWeight: "bold" }}>
          Bill Pay?
        </Text>
      </View>
      <View style={styles.btnBox}>
        <View style={styles.btnStyle}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Question_3", {
                q1: route.params.q1,
                q2: "prepay",
              })
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Prepay</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnStyle}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Question_3", {
                q1: route.params.q1,
                q2: "contract",
              })
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Bill Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Question;

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

  button: {
    backgroundColor: "#e71e70",
    padding: 30,
    borderRadius: 10,
    elevation: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#f2f1f2",
    fontWeight: "bold",
  },
});
