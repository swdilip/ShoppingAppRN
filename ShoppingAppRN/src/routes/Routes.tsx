import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import LoginScreen from '../screens/LoginScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ShopCartContext} from '../context/ShopCartContext';
import {useAuthContext} from '../context/UserAuthContext';
// import MapScreen from '../screens/MapScreen';

type HomeStackParamList = {
  Home: undefined;
  Product: {productId: number};
};

export type ProductScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Product'
>;

export type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Home'
>;

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator();
const CartStack = createNativeStackNavigator();

function HomeStackScreen() {
  const {user} = useAuthContext();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: `Hello, ${user}`,
        }}
      />
      <Stack.Screen name="Product">
        {props => <ProductScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function ShoppingCartStackScreen() {
  return (
    <CartStack.Navigator initialRouteName="Shopping Cart">
      <CartStack.Screen name="Shopping Cart" component={ShoppingCartScreen} />
      <CartStack.Screen name="Checkout" component={CheckoutScreen} />
    </CartStack.Navigator>
  );
}

function AppTabScreen() {
  const {items} = useContext(ShopCartContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home Tab">
      <Tab.Screen
        name="Home Tab"
        component={HomeStackScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Icon name="home" size={30} color="#6b6964" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ShoppingCartStackScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Icon name="shopping-cart" size={30} color="#6b6964" />
              </View>
            );
          },
          tabBarBadge: items?.length,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Icon name="user" size={30} color="#6b6964" />
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Icon name="map" size={30} color="#6b6964" />
              </View>
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}

type LoginStackParamList = {
  LoginStack: undefined;
  App: undefined;
};

export type LoginProps = NativeStackScreenProps<
  LoginStackParamList,
  'LoginStack',
  'App'
>;

const LogInStack = createNativeStackNavigator<LoginStackParamList>();

function Routes() {
  const {appLoaded, isLoggedIn} = useAuthContext();

  if (!appLoaded) {
    return null;
  }

  // The app has loaded.

  return (
    <NavigationContainer>
      <LogInStack.Navigator
        initialRouteName={isLoggedIn ? 'App' : 'LoginStack'}
        screenOptions={{
          headerShown: false,
        }}>
        <LogInStack.Screen name="LoginStack" component={LoginScreen} />
        <LogInStack.Screen name="App" component={AppTabScreen} />
      </LogInStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
