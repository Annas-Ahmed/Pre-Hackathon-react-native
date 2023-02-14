import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ButtonComp from '../components/button_comp';
import {commonStyles} from '../styles/common_styles';
import {homeStyles} from '../styles/home_style';

const LoginSignupScreenComp = ({title, navigation}) => {
  return (
    <SafeAreaView style={commonStyles.mainContainer2}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Image
          // style={homeStyles.image}
          source={require('../assets/login_head.png')}
          style={{
            width: 40,
            height: 40,
            marginRight: 30,
          }}
        />
        <Text style={commonStyles.logo}>Plantify</Text>
      </View>
      <View>
        <Text style={commonStyles.heading}>{title}</Text>
        <Text style={commonStyles.para}>
          Masukan NISN dan password untuk memulai belajar sekarang
        </Text>
        <Text style={commonStyles.inputLabel}>Username/Email</Text>
        <TextInput
          style={[commonStyles.input, {marginBottom: 40}]}
          placeholder="Username/Email"
        />
        <Text style={commonStyles.inputLabel}>Password</Text>
        <TextInput
          style={[commonStyles.input, {marginBottom: 60}]}
          placeholder="Password"
        />
        <ButtonComp title={title} />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyTabs');
          }}
          style={[
            commonStyles.textButton,
            title == 'Signup' ? {display: 'none'} : {},
          ]}>
          <Text>does not have account?</Text>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginSignupScreenComp;
