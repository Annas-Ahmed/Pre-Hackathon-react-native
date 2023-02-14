import React from 'react';
import {Image, Text, View} from 'react-native';

const CartItem = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <Image
        source={require('../assets/product1.png')}
        style={{
          width: 50,
          height: 50,
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 15,
            color: '#002140',
            fontWeight: 700,
          }}>
          Watermelon Peperomia
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            justifyContent: 'flex-start',
          }}>
          <Text>+</Text>
          <Text>1</Text>
          <Text>-</Text>
          <Text>bin</Text>
        </View>
      </View>

      <Text>save icon</Text>
      <Text>$350</Text>
    </View>
  );
};

export default CartItem;
