import React from 'react';
import {Text, View, Image, TouchableHighlight, StyleSheet} from 'react-native';
import {Product} from '../Types';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface ProductCardProps {
  product: Product;
  navigation: NavigationProp<ParamListBase>;
}

export default function ProductCard({product, navigation}: ProductCardProps) {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('Product', {productId: product.id})}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>£{product.price}</Text>
        </View>
        <View style={styles.picture}>
          <Image source={{uri: product.image}} style={styles.displayImg} />
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 6,
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: '#F4ACB7',
    flexDirection: 'row-reverse',
  },
  detailsContainer: {flex: 0.7},
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  price: {fontWeight: 'bold', fontSize: 15, marginTop: 8, color: '#9D8189'},
  picture: {
    flex: 0.3,
    marginRight: 15,
    width: 100,
    height: 100,
  },
  displayImg: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});
