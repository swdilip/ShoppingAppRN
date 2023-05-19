import React, {useContext, useEffect, useState} from 'react';
import {Text, TextInput, View, Button, StyleSheet} from 'react-native';
import data from '../data/addresses.json';
import {
  onDisplayNotification,
  onCreateTriggerNotification,
} from '../utils/notifications';
import {OrdersContext} from '../context/OrdersContext';
import {Order} from '../Types';
import {ShopCartContext} from '../context/ShopCartContext';

export default function CheckoutScreen() {
  const {orders, setOrders} = useContext(OrdersContext);
  const {items} = useContext(ShopCartContext);
  const date = new Date(Date.now());
  // const [query, setQuery] = useState('');
  const [order, setOrder] = useState<Order>({
    items: [],
    user: '',
    address: '',
    deliveryTime: date,
  });
  // const Addresses = data.addresses.map(item => {
  //   return (
  //     item.houseNumber +
  //     ' ' +
  //     item.streetName +
  //     ', ' +
  //     item.town +
  //     ', ' +
  //     item.city +
  //     ', ' +
  //     item.postCode
  //   );
  // });

  useEffect(() => {
    setOrder({
      ...order,
      items: items,
    });
  }, []);

  function onNameChangeHandler(e: string) {
    setOrder({
      ...order,
      user: e,
    });
  }

  function onAddressChangeHandler(e: string) {
    setOrder({
      ...order,
      address: e,
    });
  }

  return (
    <View>
      <Text>Checkout</Text>
      <Text>Recipient Name</Text>
      <TextInput placeholder="Enter Name" onChangeText={onNameChangeHandler} />
      <Text>Address</Text>
      <TextInput
        placeholder="Enter Address"
        onChangeText={onAddressChangeHandler}
      />
      <Text>Choose Shipping Time</Text>
      <Button
        title="Place Order"
        onPress={() => {
          onDisplayNotification();
          onCreateTriggerNotification(15);
          setOrders([...orders, order]);
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
