import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const companies = [
  "Pinergy",
  "Prepay Power",
  "Electric Ireland",
  "Airtricity",
  "Energia",
  "Bord Gais Energy",
];
const Question_3 = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{ color: "#e71e70", fontSize: 60, fontWeight: "bold", textAlign:"center" }}>
          Select your previous supplier
        </Text>
      </View>
      <View style={styles.btnBox}>
        <View style={styles.btnBox}>
          <SelectDropdown
            data={companies}
            onSelect={(selectedItem, index) => {
              navigation.navigate("Deals", {
                q1: route.params.q1,
                q2: route.params.q2,
                q3: selectedItem,
              });
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected

              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />
        </View>
      </View>
    </View>
  );
};
export default Question_3;

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
    backgroundColor: "blue",
    padding: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#f2f1f2",
  },
  dropdown2BtnStyle: {
    fontWeight: "bold",
    fontSize: 0.03 * windowHeight,
    width: 0.8 * windowWidth,
    backgroundColor: "#e71e70",
    borderRadius: 10,
    elevation: 10,
  },
  dropdown2BtnTxtStyle: {
    color: "#f2f1f2",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: {
    backgroundColor: "#f2f1f2",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  dropdown2RowStyle: {
    backgroundColor: "#e71e70",
    borderStyle: "solid",
    borderColor: "#f2f1f2",
    borderWidth: .5,
  },
  dropdown2RowTxtStyle: {
    color: "#f2f1f2",
    textAlign: "center",
    fontWeight: "bold",
  },
});
