import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';

export default function ProductCard({product, navigation}) {
  return (
    <TouchableHighlight onPress={() => navigation.navigate('Product')}>
      <View>
        <Text>{product.title}</Text>
        <View>
          <Image
            source={{uri: product.image}}
            style={{width: 50, height: 50}}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
}
