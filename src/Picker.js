import * as React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Stack = createNativeStackNavigator();

function Picker({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={{ width: "100%", height: "100%",     resizeMode: "contain" }}
          source={require("../assets/picker.png")}
        />
      </View>

      <View style={styles.btnBox}>
        <View style={styles.btnStyle}>
          <TouchableOpacity onPress={() => navigation.navigate("Wizard")}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Picker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f1f2",
    width: "100%",
    height: "100%",
  },

  box: {
    backgroundColor: "#f2f1f2",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "100%"
  },

  btnBox: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btnStyle: {},

  buttonText: {
    fontWeight: "bold",
    fontSize: 0.03 * windowHeight,
    width: 0.8 * windowWidth,
    color: "#f2f1f2",
    backgroundColor: "#e71e70",
    padding: 0.01 * windowHeight,
    borderRadius: 0.01 * windowHeight,
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 0.5,
    textAlign: "center",
  },
});
