/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import {Button} from 'react-native';

import {ShopCartProvider} from './src/context/ShopCartContext';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <ShopCartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              headerRight: () => (
                <Button
                  title="Shop Cart"
                  onPress={() => {
                    navigation.navigate('ShoppingCart');
                  }}
                />
              ),
            })}
          />
          <Stack.Screen name="Product">
            {props => <ProductScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ShopCartProvider>
  );
}

export default App;
