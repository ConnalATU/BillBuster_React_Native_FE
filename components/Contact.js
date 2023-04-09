import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { useForm } from "react-hook-form";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(true);


  const db = getFirestore();

  const onSubmit = async () => {
    try {
      await addDoc(collection(db, "contacts"), formData);
      setShowImage(true);
      setShowText(false);

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
      {showImage && <Image style={{resizeMode: "contain", width: "100%", height: "100%"}} source={require('../assets/Formsub.gif')} />}


      {showText &&  <Text style={styles.header}>Contact Us</Text>}


      {showText &&  <Text style={styles.label}>First name</Text>}
      {showText &&  <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("fname", value)}
          value={formData.fname}
        />}

{showText &&   <Text style={styles.label}>Last name</Text>}
    {showText &&    <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("lname", value)}
          value={formData.lname}
        />}

{showText &&   <Text style={styles.label}>Email</Text>}
     {showText &&   <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("email", value)}
          value={formData.email}
          keyboardType="email-address"
        />}

{showText && <Text style={styles.label}>Phone</Text>}
    {showText &&    <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("phone", value)}
          value={formData.phone}
          keyboardType="phone-pad"
        />}

{showText &&   <Text style={styles.label}>Message</Text>}
    {showText &&    <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("message", value)}
          value={formData.message}
          multiline={true}
          numberOfLines={4}
        />}

{showText &&    <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>}
      </View>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f1f2",
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#e71e70",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase"
},
});
