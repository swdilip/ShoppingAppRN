import React, {useContext} from 'react';
import {Text} from 'react-native';
import {ShopCartContext} from '../context/ShopCartContext';

export default function () {
  const {items, setItems} = useContext(ShopCartContext);

  return <Text>{items}</Text>;
}
