import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Dimensions,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Dashboard = ({ navigation }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            backgroundColor: "#f2f1f2",
            height: 0.2 * windowWidth,
            width: 0.2 * windowWidth,
            borderRadius: 0.1 * windowWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome5 color="#e71e70" size={32} name="user-alt" />
        </View>
        <Text style={styles.text}>{name.firstName}'s Home</Text>
      </View>

      <View style={{ alignSelf: "flex-start" }}>
        <Text
          style={{
            marginLeft: 0.02 * windowHeight,
            marginTop: 0.02 * windowHeight,
            color: "#595959",
            fontWeight: "bold",
            padding: 5,
            textAlign: "left",
          }}
        >
          Overview
        </Text>
      </View>
      <View style={styles.widgets}>
        <View style={styles.widget}>
          <FontAwesome5
            color="#e71e70"
            size={32}
            name="lightbulb"
          />
          <Text style={[styles.widgetText]}>0.43</Text>
          <Text style={[styles.wText]}>Avg Unit Rate</Text>
        </View>
        <View style={styles.widget}>
          <FontAwesome5 color="#e71e70" size={32} name="burn" />
          <Text style={[styles.widgetText]}>1.2g</Text>
          <Text style={[styles.wText]}>Co2/Per Unit</Text>
        
        </View>
        <View style={styles.widget}>
          <FontAwesome5 color="#e71e70" size={32} name="euro-sign"  />
          <Text style={[styles.widgetText]}>160</Text>
          <Text style={[styles.wText]}>Avg Monthly Bill</Text>

        </View>
      </View>

      <View
        style={{
          alignSelf: "flex-start",
        }}
      >
        <Text
          style={{
            marginLeft: 0.02 * windowHeight,
            color: "#595959",
            fontWeight: "bold",
            padding: 5,
            textAlign: "left",
          }}
        >
          Options
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Picker")}
          style={[styles.button, { backgroundColor: "#e71e70" }]}
        >
          <FontAwesome5 color="#f2f1f2" size={32} name="power-off" />
          <Text style={styles.buttonText}>Find a deal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("form")}
          style={[styles.button, { backgroundColor: "#e71e70" }]}
        >
          <FontAwesome5 color="#f2f1f2" size={32} name="question-circle" />
          <Text style={styles.buttonText}>Want us to{"\n"}find a deal?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("OpenAi")}
          style={[styles.button, { backgroundColor: "#e71e70" }]}
        >
          <FontAwesome5 color="#f2f1f2" size={32} name="robot" />
          <Text style={[styles.buttonText, styles.shadowProp]}>Chat Bot</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Add")}
          style={[styles.button, { backgroundColor: "#e71e70" }]}
        >
          <FontAwesome color="#f2f1f2" size={32} name="line-chart" />
          <Text style={styles.buttonText}>Predictor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("CalMenu")}
          style={[styles.button, { backgroundColor: "#e71e70" }]}
        >
          <FontAwesome5 color="#f2f1f2" size={32} name="calculator" />
          <Text style={styles.buttonText}>Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Contact")}
          style={[styles.button, { backgroundColor: "#e71e70" }]}
        >
          <FontAwesome5 color="#f2f1f2" size={32} name="phone" />
          <Text style={[styles.buttonText, styles.shadowProp]}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          firebase.auth().signOut();
        }}
        style={{ alignItems: "center", marginTop: 50 }}
      >
        <Text
          style={{
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
          }}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#f2f1f2",
  },
  top: {
    backgroundColor: "#e71e70",
    height: 0.25 * windowHeight,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    marginLeft: 0.02 * windowHeight,
    marginRight: 0.02 * windowHeight,
    marginBottom: 0.02 * windowHeight,
    height: 0.25 * windowWidth,
    width: 0.25 * windowWidth,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    color: "white",
    elevation: 10,
  },
  text: {
    fontSize: 0.035 * windowHeight,
    margin: 10,
    textAlign: "center",
    color: "#f2f1f2",
  },

  buttonText: {
    fontSize: 12,
    adjustsFontSizeToFit: true,
    color: "#f2f1f2",
    padding: 1,
  },
  widgetText: {
    fontSize: 20,
    adjustsFontSizeToFit: true,
    color: "#e71e70",
    padding: 1,
  },
  wText: {
    fontSize: 12,
    adjustsFontSizeToFit: true,
    paddingBottom: 5,
  },
  widgets: {
    backgroundColor: "#f1f4fa",
    height: 0.25 * windowWidth,
    width: 0.9 * windowWidth,
    marginBottom: 0.05 * windowHeight,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 0.5,
    borderRadius: 15,
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  widget: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0.02 * windowHeight,
    marginRight: 0.02 * windowHeight,
    marginTop: 0.02 * windowHeight,
  },
});
