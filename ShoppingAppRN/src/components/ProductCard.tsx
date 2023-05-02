import React from 'react';
import {Text} from 'react-native';

export default function ProductCard({product}) {
  return <Text>{product.title}</Text>;
}
