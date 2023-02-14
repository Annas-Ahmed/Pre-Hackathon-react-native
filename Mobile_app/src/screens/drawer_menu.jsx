import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DrawerMenu = () => {
  return (
    <View
      style={{
        backgroundColor: '#0B845C',
        height: '100%',
        alignItems: 'center',
        paddingVertical: '15%',
      }}>
      <View>
        <Text style={styles.textStyle}>Shop</Text>
        <Text style={styles.textStyle}>Plant Care</Text>
        <Text style={styles.textStyle}>Community</Text>
        <Text style={styles.textStyle}>My Account</Text>
        <Text style={styles.textStyle}>Track Order</Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          marginTop: 30,
          marginBottom: 15,
        }}>
        Get the dirt.
      </Text>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          borderWidth: 1,
          borderColor: 'white',
          paddingHorizontal: 50,
          width: '80%',
          marginBottom: 35,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            textAlign: 'center',
          }}>
          Enter your Email
        </Text>
      </TouchableOpacity>
      <Text style={styles.textStyle2}>FAQ</Text>
      <Text style={styles.textStyle2}>About US</Text>
      <Text style={styles.textStyle2}>Contact Us</Text>
    </View>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 15,
    // textAlign: 'justify',
  },
  textStyle2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
});
