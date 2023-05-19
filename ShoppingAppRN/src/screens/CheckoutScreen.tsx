import React, {useContext, useEffect, useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
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
  // const [query, setQuery] = useState('');
  const [order, setOrder] = useState<Order>({
    items: [],
    user: '',
    address: '',
    deliveryTime: 0,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  function placeOrder() {
    const date = new Date(Date.now());
    date.setSeconds(date.getSeconds() + 10);
    onDisplayNotification();
    onCreateTriggerNotification(15);
    setOrders([...orders, {...order, deliveryTime: date.getTime()}]);
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
      <Button title="Place Order" onPress={placeOrder} />
    </View>
  );
}

//Recipient Name
//Shipping Address
//Shipping Date
//Shopping cart overview
//Payment method
