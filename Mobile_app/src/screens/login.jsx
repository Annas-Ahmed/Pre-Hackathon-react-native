import React, {useState} from 'react';
import axios from 'axios';

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

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginFun = (email, password) => {
    axios
      .post(`${address}/login`, {
        email,
        password,
      })
      .then(function (response) {
        console.log(response, 'response login');
      })
      .catch(function (error) {
        console.log(error, 'error login');
      });
    navigation.navigate('Product');
  };

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
        <Text style={commonStyles.heading}>Login</Text>
        <Text style={commonStyles.para}>
          Masukan NISN dan password untuk memulai belajar sekarang
        </Text>
        <Text style={commonStyles.inputLabel}>Username/Email</Text>
        <TextInput
          onChangeText={e => {
            setEmail(e);
          }}
          style={[commonStyles.input, {marginBottom: 40}]}
          placeholder="Username/Email"
        />
        <Text
          onChangeText={e => {
            setPassword(e);
          }}
          style={commonStyles.inputLabel}>
          Password
        </Text>
        <TextInput
          style={[commonStyles.input, {marginBottom: 60}]}
          placeholder="Password"
        />
        <ButtonComp onPress={() => loginFun(email, password)} title={'Login'} />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
          style={[commonStyles.textButton]}>
          <Text>does not have account?</Text>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
