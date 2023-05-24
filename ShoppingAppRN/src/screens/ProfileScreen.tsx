import React, {useContext} from 'react';

import {Text, View, FlatList} from 'react-native';

import {OrdersContext} from '../context/OrdersContext';
import OrderCard from '../components/OrderCard';

export default function () {
  const {orders} = useContext(OrdersContext);
  return (
    <View>
      <Text>User Profile Screen</Text>
      <FlatList
        data={orders}
        renderItem={order => (
          <OrderCard
            products={order.item.items}
            user={order.item.user}
            address={order.item.address}
            deliveryTime={order.item.deliveryTime}
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
