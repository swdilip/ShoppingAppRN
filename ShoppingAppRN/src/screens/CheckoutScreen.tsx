import React, {useState} from 'react';
import {Text, TextInput, View, Button, StyleSheet} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import data from '../data/addresses.json';
import notifee from '@notifee/react-native';

async function onDisplayNotification() {
  await notifee.requestPermission();

  const channelID = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: 'HELOOO WORLD',
    body: 'This notification seems to be working idk bruv',
    android: {
      channelId: channelID,
      smallIcon: 'ic_launcher_round',
      pressAction: {
        id: 'default',
      },
    },
  });
}

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
      <Text>Choose Shipping Date</Text>
      <Button
        title="Place Order"
        onPress={() => {
          onDisplayNotification();
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
