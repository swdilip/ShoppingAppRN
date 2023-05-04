/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import {Button} from 'react-native';

import {ShopCartProvider} from './src/context/ShopCartContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product">
        {props => <ProductScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <ShopCartProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="HomeTab" component={HomeStackScreen} />
          <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ShopCartProvider>
  );
}

export default App;
