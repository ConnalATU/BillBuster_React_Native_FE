import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../config";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground
        source={require("../assets/bbBackground_w3.png")}
        style={styles.container}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "#e71e70",
            marginTop: 0.5 * windowHeight,
            textShadowColor: "grey",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 2,
          }}
        >
          Sign in
        </Text>
        <View style={{ marginTop: 0.05 * windowHeight }}>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          onPress={() => loginUser(email, password)}
          style={styles.button}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
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
            Next
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Registration")}
          style={{ marginTop: 0.02 * windowHeight }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "grey",
            }}
          >
            Don't have an account?{" "}
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
                color: "#e71e70",
              }}
            >
              Register Now
            </Text>
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f2f1f2",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    paddingTop: 0.01 * windowHeight,
    paddingBottom: 0.01 * windowHeight,
    width: 0.8 * windowWidth,
    fontSize: 17,
    marginBottom: 0.03 * windowHeight,
    textAlign: "center",
    color: "black",
    backgroundColor: "#f2f1f2",
    borderRadius: 0.01 * windowHeight,
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
  },
  button: {
    marginBottom: 0.03 * windowHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
