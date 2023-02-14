import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
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
import ProductCard from '../components/product_card';
import MyTabs from '../config/bottom_tabs';

const Products = ({navigation}) => {
  const [productData, setProductData] = useState([{}, {}, {}, {}, {}]);

  return (
    <>
      <ScrollView style={commonStyles.mainContainer2}>
        <ImageBackground
          source={require('../assets/product_main.png')}
          resizeMode="cover"
          style={{
            // width: '100%',
            height: 200,
            padding: '5%',
            // paddingVertical: '15%',
            justifyContent: 'center',
            borderRadius: 20,
            overflow: 'hidden',
            gap: 10,
          }}>
          <Text style={productStyle.mainHeading}>
            There's a Plant for everyone
          </Text>
          <Text style={productStyle.subHeading}>
            Get your 1st plant @ 40% off
          </Text>
        </ImageBackground>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 25,
            gap: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              background: '#FFFFFF',
              borderColor: '#002140',
              borderWidth: 1,
              borderRadius: 14,
              paddingHorizontal: 14,
            }}>
            <Icon style={productStyle.inputIcon} name="search" />
            <TextInput
              style={{
                flex: 1,
                paddingHorizontal: 20,
                fontSize: 18,
              }}
              placeholder="Search"
              placeholderTextColor="black"
            />
            <IconM style={productStyle.inputIcon} name="line-scan" />
          </View>
          <Image source={require('../assets/filter_icons.png')} />
        </View>
        <View
          style={{
            gap: 60,
            marginTop: 30,
          }}>
          {productData?.map(() => {
            return (
              <ProductCard
                onPress={() => {
                  navigation.navigate('ProductDetail');
                }}
              />
            );
          })}
        </View>

        {/* <View>
          <Text>Plant a Life</Text>
          <Text>Live amongst Living</Text>
          <Text>Spread the joy</Text>
        </View> */}
      </ScrollView>
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
