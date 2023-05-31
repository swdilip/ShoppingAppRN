import React, {useContext, useEffect, useState} from 'react';
import {Text, TextInput, View, Button, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {
  onDisplayNotification,
  onCreateTriggerNotification,
} from '../utils/notifications';
import {constants} from '../utils/constants';
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
    location: {},
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

  async function onAddressSelected(placeId: string) {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${constants.GOOGLE_API_KEY}`,
    );
    const jsonData = await response.json();
    setOrder({
      ...order,
      location: jsonData.results[0].geometry.location,
    });
  }

  function placeOrder() {
    const date = new Date(Date.now());
    date.setSeconds(date.getSeconds() + 15);
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
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search Address"
          onPress={data => {
            // console.log(data, details);
            onAddressSelected(data.place_id);
          }}
          query={{
            key: constants.GOOGLE_API_KEY,
            language: 'en',
          }}
        />
      </View>
      {/* <Text>Choose Shipping Time</Text> */}
      <Button title="Place Order" onPress={placeOrder} />
    </View>
  );
}

//Recipient Name
//Shipping Address
//Shipping Date
//Shopping cart overview
//Payment method

const styles = StyleSheet.create({
  container: {
    margin: 5,
    position: 'absolute',
    marginBottom: 50,
    width: '90%',
    padding: 8,
  },
});
