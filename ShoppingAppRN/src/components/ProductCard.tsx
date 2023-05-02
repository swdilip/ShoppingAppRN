import React from 'react';
import {Text, View, Image} from 'react-native';

export default function ProductCard({product}) {
  return (
    <View>
      <Text>{product.title}</Text>
      <View>
        <Image source={{uri: product.image}} style={{width: 50, height: 50}} />
      </View>
    </View>
  );
}
