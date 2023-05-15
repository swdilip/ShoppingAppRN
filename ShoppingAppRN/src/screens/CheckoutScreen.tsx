import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';

export default function CheckoutScreen() {
  return (
    <View>
      <Text>Checkout</Text>
      <Text>Recipient Name</Text>
      <TextInput placeholder="Enter Name" />
      <Text>Address Name</Text>
      <TextInput placeholder="Enter Address" />
      <Button title="Place Order" />
    </View>
  );
}

//Recipient Name
//Shipping Address
//Shipping Date
//Shopping cart overview
//Payment method
