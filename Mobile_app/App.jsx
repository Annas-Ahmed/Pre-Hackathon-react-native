import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import MyTabs from './src/config/bottom_tabs';
import StackNavigation from './src/config/stack_navigation';
// import Login from './src/screens/login';

function App() {
  return (
    <>
      <StackNavigation />
    </>
  );
}

export default App;
