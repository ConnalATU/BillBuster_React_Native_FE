import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
   
  
} from "react-native";


import Constants from "expo-constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function Add() {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(true);

  //const week = 16;
  const [prediction, setPrediction] = useState("");
  const [week, setWeek] = useState("1");
  const [amount, setAmount] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [Newdate, setNewdate] = useState("");


  const showDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), and day
        const selectedDate = new Date(year, month, day);
        setDate(selectedDate);
        setNewdate(selectedDate.toLocaleDateString('en-US'));
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };


  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  })

  if (!fontsLoaded) {
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setWeek(parseInt(week) + 1);

  
    try {
      setShowImage(true);
      setShowText(false);

  
      const response = await fetch(
        "https://billbusterback.azurewebsites.net/api/energy",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ week, amount, company }),
        }
      );
  
      const data = await response.json();
  
      setPrediction(data.prediction.toFixed(0));
      
      setShowImage(false);
      setShowText(true);
  
      setTimeout(() => {
        // alert(
        //   "Thank you, your data has been submitted, click OK to get next week's usage prediction"
        // );
      }, 0);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (

   

    <ScrollView style={styles.scroll}>
      
      <View style={styles.container}>
      <View style={{ alignItems: "center", textAlign: "center",justifyContent: "center", fontFamily: 'Rubik_400Regular',marginTop: 0.02 * windowHeight }}>
          <View style={styles.widgets}>
          <Text style={styles.topnew}>


Usage Predictor

</Text>
            <Text style={styles.top}>
             Input the date, then your usage in units. Nexts weeek usage will be predicted + or - last weeks usage.

            </Text>
           
         </View>
         </View>
      
        <View style={styles.label_cont}>
          <Text style={styles.label}>Date:</Text>
          </View>
        <TextInput
          style={styles.input}
          keyboardType="date"
          value={Newdate}
            placeholder="MM/DD/YYYY"

          onChangeText={(Newdate) => setNewdate(Newdate)}
        />
       

        <View style={styles.label_cont}>
        <Text style={styles.label}>Units:</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={amount}
          onChangeText={(amount) => setAmount(amount)}
        />
        <View style={styles.label_cont}>
        <Text style={styles.label}>Company:</Text>
        </View>
        <TextInput
          style={styles.input}
          value={company}
          onChangeText={(company) => setCompany(company)}
        />
        {/* <View style={styles.label_cont}>
        <Text style={styles.label}>Date:</Text>
        </View>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={(date) => setDate(date)}
        /> */}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ color: "#f2f1f2", fontSize: 20 }}>Add Usage</Text>
        </TouchableOpacity>

        <View style={{ alignItems: "center", marginTop: 30, fontFamily: 'Rubik_400Regular' }}>

          <View style={styles.widgets}>
          {showImage && <Image style={{width: 150, height: 150}} source={require('../assets/loading.gif')} />}

           {showText && <Text style={styles.prediction}>Predicted Usage</Text>}
           {showText && <Text style={styles.newprediction}>{prediction} units</Text>}
           {showText && <Text style={styles.prediction}>For Next Week</Text>}
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", fontFamily: 'Rubik_400Regular' }}>
          <View style={styles.widgets}>
          {showImage && <Image style={{width: 150, height: 150}} source={require('../assets/loading.gif')} />}

          {showText && <Text style={styles.prediction}>
              Cost of Usage 
            </Text>}
            {showText && <Text style={styles.newprediction}>€ {prediction * 0.44}</Text>}
            {showText && <Text style={styles.prediction}>
               Average Unit Rate
            </Text>}
         </View>
          </View>
          
        </View>
        
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({

  scroll: {
    
    
    fontFamily: 'Rubik_400Regular'
    
    

  },

  label: {
    color: "#36454F		",
    margin: 20,
    marginLeft: 0,
    fontSize: 16,
    flex: 1,
    

  },
  label_cont: {
    flex: 1,
    alignItems: "flex-start",
      flexDirection: "row",
      marginLeft: 10,


  },
  button: {

    marginTop: 40,
    height: 40,
    width: "50%",
    backgroundColor: "#e71e70",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#f2f1f2",
    alignItems: "center",
    
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "none",
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 16,
    width: "95%",
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    textAlign: "center",
  },
  prediction: {
    fontFamily: 'Rubik_400Regular',

    color: "#000",
    marginTop: 2,
    fontSize: 15,
    fontWeight: "bold",
    padding: 5
    
  },
  newprediction: {
    fontFamily: 'Rubik_400Regular',

    color: "#29ad56",
    margin: 10,
    fontSize: 60,
    fontWeight: "bold",
  },
  top: {
    fontFamily: 'Rubik_400Regular',
    textAlign: "center",

    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    padding: 20
  },
  topnew: {
    fontFamily: 'Rubik_400Regular',
textAlign: "center",
    color: "#29ad56",
    margin: 10,
    fontSize: 35,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight:10
  },
  widgetText: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 30,
    adjustsFontSizeToFit: true,
    color: "#36454F	",
    padding: 1,
    
  },
  widgets: {
    fontFamily: 'Rubik_400Regular', 
    backgroundColor: "#f1f4fa",
    height: 0.50 * windowWidth,
    width: 0.9 * windowWidth,
    marginBottom: 0.05 * windowHeight,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 0.5,
    borderRadius: 15,
    elevation: 10,
    
    //flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    
  },
  widget: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0.02 * windowHeight,
    marginRight: 0.02 * windowHeight,
    marginTop: 0.02 * windowHeight,
    fontFamily: 'Rubik_400Regular' 
  },
});
