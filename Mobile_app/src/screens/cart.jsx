import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import CartItem from '../components/cart_item';

function Cart() {
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        paddingHorizontal: '8%',
      }}>
      <Text
        style={{
          fontSize: 32,
          color: '#0D986A',
          fontWeight: 700,
        }}>
        Your Bag
      </Text>
      <CartItem />
      <CartItem />
      <CartItem />
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#002140',
          }}>
          Total
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#002140',
          }}>
          $1090
        </Text>
      </View>
    </ScrollView>
  );
}

export default Cart;
