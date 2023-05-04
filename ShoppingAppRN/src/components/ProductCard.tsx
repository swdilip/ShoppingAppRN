import React from 'react';
import {Text, View, Image, TouchableHighlight, StyleSheet} from 'react-native';

export default function ProductCard({product, navigation}) {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('Product', {productId: product.id})}>
      {/* <View style={styles.cardShadow}> */}
      <View style={styles.card}>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.picture}>
          <Image
            source={{uri: product.image}}
            style={{width: 100, height: 100}}
          />
        </View>
      </View>
      {/* </View> */}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    // borderWidth: 2,
    borderRadius: 6,
    // borderColor: '#20232a',
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: '#52006A',
    flexDirection: 'row-reverse',
  },
  title: {
    flex: 0.7,
  },
  picture: {
    flex: 0.3,
  },
});
