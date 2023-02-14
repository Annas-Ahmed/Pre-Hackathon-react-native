import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {commonStyles} from '../styles/common_styles';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Fontisto';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {productStyle} from '../styles/product_styles';

const ProductCard = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={productStyle.componentStyle.container}>
      <Text style={productStyle.componentStyle.text1}>Air Purifier</Text>
      <Text style={productStyle.componentStyle.text2}>Croton Petra</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          gap: 20,
        }}>
        <Text style={productStyle.componentStyle.price}>$200</Text>
        <Text>
          <IconE
            style={[
              {
                fontSize: 35,
                fontWeight: 'bold',
                color: '#000',
              },
            ]}
            name="heart"
          />
        </Text>
        <Image
          source={require('../assets/cart_logo.png')}
          style={{
            width: 60,
            height: 60,
          }}
        />
        {/* <Text> */}
        {/* <Icon
            style={[
              {
                fontSize: 55,
                // borderRadius: 50,
                borderWidth: 1,
                borderColor: 'red',
                fontWeight: 'bold',
                color: '#0D986A',
              },
            ]}
            name="shopify"
          /> */}
        {/* </Text> */}
      </View>
      <Image
        source={require('../assets/product1.png')}
        style={{
          width: 180,
          height: 180,
          // objectFit: 'contain',
          position: 'absolute',
          // bottom: 0,
          top: -40,
          right: -90,
        }}
      />
    </TouchableOpacity>
  );
};

export default ProductCard;
