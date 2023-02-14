// import React from 'react';
// import LoginSignupScreenComp from '../components/login_signup_screen_comp';

// function Login({navigation}) {

//   const loginFun = (email, password) => {
//     axios
//       .post(`${address}/login`, {
//         email,
//         password,
//       })
//       .then(function (response) {
//         console.log(response, 'response login');
//       })
//       .catch(function (error) {
//         console.log(error, 'error login');
//       });
//   };

//   return <LoginSignupScreenComp title={'Login'} navigation={navigation} />;
// }

// export default Login;

import axios from 'axios';
import React, {useState} from 'react';
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

const Signup = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signupFun = (email, password) => {
    axios
      .post(`${address}/signup`, {
        firstName,
        lastName,
        contactNumber,
        email,
        password,
      })
      .then(function (response) {
        console.log(response, 'response signup');
      })
      .catch(function (error) {
        console.log(error, 'error signup');
      });
    () => navigation.navigate('Login');
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
        <Text style={commonStyles.heading}>Signup</Text>
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
        <ButtonComp
          onPress={() => signupFun(email, password)}
          title={'Signup'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
