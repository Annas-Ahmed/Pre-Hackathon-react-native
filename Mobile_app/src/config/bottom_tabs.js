import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../screens/cart';
import Favourites from '../screens/favourites';
import Products from '../screens/products';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Products"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Favourites" component={Favourites} />
        {/* <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} */}
        {/* /> */}
      </Tab.Navigator>
    </>
  );
}

export default MyTabs;
