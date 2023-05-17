import React, {useState} from 'react';
import {Text, TextInput, View, Button, StyleSheet} from 'react-native';
import data from '../data/addresses.json';
import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';

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

async function onCreateTriggerNotification() {
  //   const channelID = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //   });

  const date = new Date(Date.now());
  date.setMinutes(date.getMinutes() + 1);

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
  };

  await notifee.createTriggerNotification(
    {
      title: 'Your Order has been delivered!',
      body: 'Recieved by a very nice person',
      android: {
        channelId: 'default',
      },
    },
    trigger,
  );
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
          //   onDisplayNotification();
          onCreateTriggerNotification();
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
