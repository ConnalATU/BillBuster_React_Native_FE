import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from "react-native";


const CalculatorMenu= ({ navigation, route}) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.box}>
        <Text style={{ color: "#e71e70", fontSize: 50, fontWeight: "bold" , textAlign:"center"}}>
            Choose Electrical Appliance
        </Text>
      </View>

        <ScrollView  style={styles.btnBox} >
          <View style={styles.btnStyle}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Calculator", {a:"Washing Machine", w:"650"})}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Washing Machine</Text>
            </TouchableOpacity>
          
           
            <TouchableOpacity
              onPress={() => navigation.navigate("Calculator", {a:"Dishwasher", w:"1800" })}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Dishwasher</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnStyle}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Calculator", {a:"Refrigerator", w:"180"})}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Refrigerator</Text>
            </TouchableOpacity>
         
            
         
            <TouchableOpacity
              onPress={() => navigation.navigate("Calculator", {a:"Tumble Dryer", w:"5000"})}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Tumble Dryer</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
              onPress={() => navigation.navigate("Cal")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Custom Appliance</Text>
          </TouchableOpacity>
          
        </ScrollView>
     
    </View>
  );
};
export default CalculatorMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f1f2",
    textAlign:"center"
  },

  box: {
    flex: 1,
    backgroundColor: "#f2f1f2",
    alignItems: "center",
    justifyContent: "center",
    

   
  },

  btnBox: {
    flex: 1,
    textAlign:"center"
   
  },
  btnStyle: {
    flex: 1,
    flexDirection: 'row',
    textAlign:"center"


    
   
    
  },
  button: {
    flex:1,
    backgroundColor: "#e71e70",
    padding: 20,
    borderRadius: 10,
    elevation: 10,
margin:5
  },
  buttonText: {
    fontSize: 22,
    color: "#f2f1f2",
    textAlign:"center",
    
  },
});
