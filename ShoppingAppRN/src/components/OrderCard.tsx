import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import OrderStatusBadge from '../components/OrderStatusBadge';
import {Order} from '../Types';

export default function OrderCard({items, user, address, deliveryTime}: Order) {
  return (
    <View style={styles.orderCardBorder}>
      <LinearGradient
        colors={['red', 'orange']}
        style={styles.gradientBackground}>
        <View style={styles.orderCardContainer}>
          <Text style={styles.nameText}>Recipient: {user}</Text>
          <Text style={styles.addressText}>Address: {address}</Text>
          <Text style={styles.addressText}>Delivery: {deliveryTime}</Text>
          <OrderStatusBadge deliveryTime={deliveryTime} />
          <View>
            <FlatList
              data={items}
              horizontal={true}
              renderItem={item => (
                <View style={styles.pictureGradientContainer}>
                  <LinearGradient
                    colors={['#E5D05B', '#E55B88']}
                    style={styles.pictureGradient}>
                    <View style={styles.picture}>
                      <Image
                        source={{uri: item.item.product.image}}
                        style={styles.displayImg}
                      />
                    </View>
                  </LinearGradient>
                </View>
              )}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    width: 75,
    height: 75,
    backgroundColor: 'white',
    resizeMode: 'contain',
    borderRadius: 5,
  },
  displayImg: {
    height: 75,
    width: 75,
    resizeMode: 'contain',
  },
  orderCardBorder: {
    margin: 10,
    borderRadius: 6,
    elevation: 10,
    shadowColor: '#D82D88',
    padding: 5,
  },
  orderCardContainer: {
    backgroundColor: 'white',
    padding: 5,
    margin: 3,
    borderRadius: 6,
  },
  gradientBackground: {
    borderRadius: 7,
  },
  pictureGradientContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  pictureGradient: {
    padding: 3,
    borderRadius: 5,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  addressText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
