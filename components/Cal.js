import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Cal = () => {
  const [hours, setHours] = useState("");
  const [wattage, setWattage] = useState("");
  const [rate, setRate] = useState("");

  const [cost, setCost] = useState(0);

  const handleSubmit = () => {
    const usage = (hours * wattage) / 1000;

    setCost(rate * usage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text
          style={{
            color: "white",
            fontSize: 50,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Custom Electrical Appliance
        </Text>
      </View>

      <View style={styles.btnBox}>
        <View style={styles.btnStyle}>
          <Text style={styles.label}>Enter number of hours:</Text>
          <TextInput
            placeholder=" Hours used"
            style={styles.input}
            value={hours}
            onChangeText={(text) => setHours(text)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Enter wattage:</Text>
          <TextInput
            placeholder="100"
            style={styles.input}
            value={wattage}
            onChangeText={(text) => setWattage(text)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Enter rate per kWh:</Text>
          <TextInput
            placeholder="20 (Price in cents"
            style={styles.input}
            value={rate}
            onChangeText={(text) => setRate(text)}
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
            color="#e71e70"
          >
            <Text style={styles.buttonText}> Calculate </Text>
          </TouchableOpacity>

          {/* <Text style={styles.label} >Cost: {parseFloat(cost.toFixed(2))}</Text> */}
          <View style={styles.widgets}>
            <Text style={styles.label2}>
              {parseFloat(cost.toFixed(2))} &euro;{" "}
            </Text>
            <Text style={styles.label2}> per hour used</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cal;

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f2f1f2",
  },

  box: {
    flex: 1,
    backgroundColor: "#e71e70",
    alignItems: "center",
    justifyContent: "center",
  },

  btnBox: {
    paddingTop: 50,
    flex: 2,
  },
  btnStyle: {
    flex: 1,

    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#f2f1f2",
    borderColor: "none",
    height: 40,
    width: "70%",
    padding: 10,
    borderRadius: 4,
    textAlign: "center",
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
  },
  label: {
    alignSelf: "stretch",
    textAlign: "center",
    color: "#e71e70",
    margin: 10,
    marginLeft: 0,
    fontSize: 20,
    textTransform: "uppercase",
  },
  label2: {
    alignSelf: "stretch",
    textAlign: "center",
    color: "green",
    margin: 10,
    marginLeft: 0,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  button: {
    margin: 20,

    backgroundColor: "#e71e70",
    padding: 5,
    width: "50%",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "black",
  },
  buttonText: {
    alignSelf: "stretch",
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    padding: 5,
  },
  widgets: {
    marginTop: 20,
    backgroundColor: "#f1f4fa",
    height: 0.25 * windowWidth,
    width: 0.5 * windowWidth,
    marginBottom: 0.05 * windowHeight,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 0.5,
    borderRadius: 15,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
