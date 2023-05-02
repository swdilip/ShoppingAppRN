import React from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function ProductScreen() {
  const route = useRoute();
  const product = route.params?.product;

  return product && <Text>{product.title}</Text>;
}
