import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import {Text, View} from 'react-native';

import {ShopCartContext} from '../context/ShopCartContext';

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

function Routes(): JSX.Element {
  const {items} = useContext(ShopCartContext);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeTab">
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Text>🏠</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="ShoppingCart"
          component={ShoppingCartScreen}
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Text>🛒</Text>
                </View>
              );
            },
            tabBarBadge: items?.length,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
