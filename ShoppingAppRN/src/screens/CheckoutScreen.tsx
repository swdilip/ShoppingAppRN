import React, {useState} from 'react';
import {Text, TextInput, View, Button, StyleSheet} from 'react-native';
import data from '../data/addresses.json';
import {
  onDisplayNotification,
  onCreateTriggerNotification,
} from '../utils/notifications';

export default function CheckoutScreen() {
  const [query, setQuery] = useState('');
  const items = data.addresses.map(item => {
    return (
      item.houseNumber +
      ' ' +
      item.streetName +
      ', ' +
      item.town +
      ', ' +
      item.city +
      ', ' +
      item.postCode
    );
  });
  return (
    <View>
      <Text>Checkout</Text>
      <Text>Recipient Name</Text>
      <TextInput placeholder="Enter Name" />
      <Text>Address</Text>
      <TextInput placeholder="Enter Address" />
      <Text>Choose Shipping Time</Text>
      <Button
        title="Place Order"
        onPress={() => {
          onDisplayNotification();
          onCreateTriggerNotification(15);
        }}
      />
    </View>
  );
}

//Recipient Name
//Shipping Address
//Shipping Date
//Shopping cart overview
//Payment method

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
});
