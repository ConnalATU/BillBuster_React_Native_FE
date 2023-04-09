import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../config";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const registerUser = async (email, password, firstName, lastName) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handlecodeInApp: true,
            url: "https://billbuster-69970.firebaseapp.com",
          })
          .then(() => {
            alert("verification email sent");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstName,
                lastName,
                email,
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground
        source={require("../assets/bbBackground_w2.png")}
        style={styles.container}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "#e71e70",
            marginTop: 0.47 * windowHeight,
            textShadowColor: "grey",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 2,
          }}
        >
          Register Here!
        </Text>
        <View style={{ marginTop: 0.02 * windowHeight }}>
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            onChangeText={(firstName) => setFirstName(firstName)}
            autoCorrect={false}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            onChangeText={(lastName) => setLastName(lastName)}
            autoCorrect={false}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCorrect={false}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => registerUser(email, password, firstName, lastName)}
          style={styles.button}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              width: 0.8 * windowWidth,
              color: "#f1f4fa",
              backgroundColor: "#e71e70",
              padding: 0.01 * windowHeight,
              borderRadius: 0.01 * windowHeight,
              borderStyle: "solid",
              borderColor: "black",
              borderWidth: 1,
              textAlign: "center",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

export default Registration;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f1f4fa",
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
    backgroundColor: "#f1f4fa",
    borderRadius: 0.01 * windowHeight,
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
  },
  text: {
    width: 0.7 * windowWidth,
    fontSize: 0.05 * windowHeight,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    marginBottom: 0.03 * windowHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
