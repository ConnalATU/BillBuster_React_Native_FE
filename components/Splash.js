import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';



const Splash = ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000); // Change the time as per your requirement
    }, []);
  
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/Splash.gif')}
          style={styles.gif}
        />
      </View>
    );
  };

  export default Splash;

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gif: {
      width: '100%',
      height: '100%',
    },
  });
  