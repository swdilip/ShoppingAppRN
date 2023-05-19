import React, {useContext} from 'react';

import {Text, View, FlatList, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {OrdersContext} from '../context/OrdersContext';

export default function () {
  const {orders} = useContext(OrdersContext);
  return (
    <View>
      <Text>User Profile Screen</Text>
      <FlatList
        data={orders}
        renderItem={item => (
          <OrderCard
            items={item.item.items}
            name={item.item.user}
            address={item.item.address}
          />
        )}
        ListEmptyComponent={
          <View>
            <Text>No Orders to display</Text>
          </View>
        }
      />
    </View>
  );
}

function OrderCard({items, name, address}) {
  return (
    <View style={styles.orderCardBorder}>
      <LinearGradient
        colors={['red', 'orange']}
        style={styles.gradientBackground}>
        <View style={styles.orderCardContainer}>
          <Text>{name}</Text>
          <Text>{address}</Text>
          <View>
            <FlatList
              data={items}
              horizontal={true}
              renderItem={item => (
                <View style={styles.picture}>
                  <Image
                    source={{uri: item.item.product.image}}
                    style={styles.displayImg}
                  />
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
    flex: 0.3,
    marginRight: 15,
    width: 100,
    height: 100,
    padding: 1,
  },
  displayImg: {
    height: 100,
    width: 100,
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
});
