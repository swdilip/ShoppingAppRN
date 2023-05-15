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
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ShopCartContext} from '../context/ShopCartContext';
import {UserAuthContext} from '../context/UserAuthContext';

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

function HomeStackScreen() {
  const {user} = useContext(UserAuthContext);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: `Hello, ${user}`}}
      />
      <Stack.Screen name="Product">
        {props => <ProductScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function AppTabScreen() {
  const {items} = useContext(ShopCartContext);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: route.name === 'Shopping Cart' ? true : false,
      })}
      initialRouteName="HomeTab">
      <Tab.Screen
        name="HomeTab"
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
        name="Shopping Cart"
        component={ShoppingCartScreen}
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
  const {appLoaded, isLoggedIn} = useContext(UserAuthContext);

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
