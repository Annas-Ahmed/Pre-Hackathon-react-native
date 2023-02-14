// In App.js in a new project

import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Products from '../screens/products';
import ProductDetail from '../screens/product_detail';
import MyTabs from './bottom_tabs';
import DrawerMenu from '../screens/drawer_menu';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          // options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          // options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          // options={{headerShown: false}}
          name="MyTabs"
          component={MyTabs}
        />
        <Stack.Screen
          // options={{headerShown: false}}
          name="Products"
          component={Products}
        />
        <Stack.Screen
          // options={{headerShown: false}}
          name="ProductDetail"
          component={ProductDetail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DrawerMenu"
          component={DrawerMenu}
        />
        {/* <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.
        {/* <Stack.Screen
          // options={{headerShown: false}}
          // header()
          navigation={false}
          options={{
            title: 'my app',
            header: () => <Appbar />,
          }}
          name="Products"
          component={Products}
        /> */}
        {/* <Stack.Screen
          // options={{headerShown: false}}
          name="ProductDetail"
          component={ProductDetail}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
