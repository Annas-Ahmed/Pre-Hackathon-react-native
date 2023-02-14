import React from 'react';
import {Text, Image, View, SafeAreaView} from 'react-native';
import ButtonComp from '../components/button_comp';
import {commonStyles} from '../styles/common_styles';
import {homeStyles} from '../styles/home_style';

function Home({navigation}) {
  return (
    <SafeAreaView style={commonStyles.mainContainer}>
      <View style={homeStyles.imageContainer}>
        <Image
          style={homeStyles.image}
          source={require('../assets/home_main.png')}
        />
        <Text>Plantify</Text>
      </View>
      <View style={homeStyles.textContainer}>
        <Text style={homeStyles.heading}>GET READY BE HIGYENIC</Text>
        <Text style={homeStyles.para}>
          Jelajahi AiLearn untuk menambah kemampuanmu dalam mengoperasikan Adobe
          Illustrator
        </Text>
        <ButtonComp
          title={'MASUK'}
          buttonFunc={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
