import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./config";
import Svg, { Path } from "react-native-svg";

import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";

import Picker from "./src/Picker";
import wizard from "./components/wizard";
import Question from "./components/Question";
import Question_3 from "./components/Question_3";
import Deals from "./components/Deals";
import form from "./components/Form";
import Contact from "./components/Contact";
import OpenAi from "./components/OpenAi";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import CalculatorMenu from "./components/CalculatorMenu";
import Calculator from "./components/Calculator";
import Cal from "./components/Cal";
import Splash from "./components/Splash";
import { Add } from "./components/Add";

const Stack = createStackNavigator();
const { height } = Dimensions.get("window");

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //Handle User State changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
          // options={{
          //   headerShown: false,
          //   headerTitle: () => (
          //     // <Image
          //     //   style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          //     //   source={require("./assets/bbLogo.jpg")}
          //     // />
          //   ),
          //   headerStyle: {
          //     height: height / 3,
          //     backgroundColor: "#e71e70",
          //     shadowColor: "#000",
          //   },
          //}}
        />
        
        
        
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerTitle: () => (
              <Image
                style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                source={require("./assets/bbLogo.jpg")}
              />
            ),
            headerStyle: {
              height: height / 3,
              backgroundColor: "#e71e70",
              shadowColor: "#000",
            },
          }}
        />

        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: false,
            headerTitle: () => (
              <Image
                style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                source={require("./assets/bbLogo.jpg")}
              />
            ),
            headerStyle: {
              height: height / 3,
              backgroundColor: "#e71e70",
              shadowColor: "#000",
            },
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="."
        component={Dashboard}
        options={{
          headerShown: false,
          headerTitle: () => (
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              source={require("./assets/bbLogo.jpg")}
            />
          ),
          headerStyle: {
            height: height / 3,
            backgroundColor: "#e71e70",
            shadowColor: "#000",
          },
        }}
      />

      <Stack.Screen
        name="Picker"
        component={Picker}
        options={{
          headerShown: true,
          title: "",
          headerStyle: { backgroundColor:'#f2f1f2'},

        }}
      />

      <Stack.Screen
        name="Wizard"
        component={wizard}
        options={{
          headerShown: false,
          title: "Question",
        }}
      />

      <Stack.Screen
        name="Question"
        component={Question}
        options={{
          headerShown: false,
          title: "Question",
        }}
      />

      <Stack.Screen
        name="Question_3"
        component={Question_3}
        options={{
          headerShown: false,
          title: "Question",
        }}
      />

      <Stack.Screen
        name="Deals"
        component={Deals}
        options={{
          headerShown: false,
          

        }}
      />

      <Stack.Screen name="OpenAi" component={OpenAi}options={{
          headerShown: true,
          title: "",
          headerStyle: { backgroundColor:'#f2f1f2'},

        }} />

      <Stack.Screen
        name="form"
        component={form}
        options={{
          headerShown: true,
          title: "",
          headerStyle: { backgroundColor:'#f2f1f2'},
        }}
      />

      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerShown: true,
          title: "",
          headerStyle: { backgroundColor:'#f2f1f2'},
        }}
      />

      <Stack.Screen
        name="CalMenu"
        component={CalculatorMenu}
        options={{ headerShown: true, title: "", headerStyle: { backgroundColor:'#f2f1f2'} }}
      />
      <Stack.Screen
        name="Calculator"
        component={Calculator}
        options={{ headerShown: true, title: "", headerStyle: { backgroundColor:'#f2f1f2'} }}
      />
      <Stack.Screen
        name="Cal"
        component={Cal}
        options={{ headerShown: true, title: "", headerStyle: { backgroundColor:'#f2f1f2'} }}
      />
      <Stack.Screen
  name="Add"
  component={Add}
  options={{
    headerTitleAlign: 'center',

    headerShown: true,
    headerStyle: { height: 220, backgroundColor:'#e71e70'},
    headerTitle: () => (
      <Image
        source={require('./assets/chart.png')}
        style={{ height: 220, width: 300, flex: 1,textAlign: 'center'}} resizeMode="contain"
      />
    ),
    title: "Add",
  }}
/>
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
