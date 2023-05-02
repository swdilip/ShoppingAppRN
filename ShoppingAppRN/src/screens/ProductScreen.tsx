import React from 'react';
import {Image, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function ProductScreen() {
  const route = useRoute();
  const product = route.params?.product;

  return (
    product && (
      <View>
        <Text>{product.title}</Text>
        <View>
          <Image
            source={{uri: product.image}}
            style={{width: 150, height: 150}}
          />
        </View>
        <Text>Category: {product.category}</Text>
        <Text>Description: {product.description}</Text>
        <Text>
          Rating: {product.rating.rate} by {product.rating.count} Users
        </Text>
      </View>
    )
  );
}
