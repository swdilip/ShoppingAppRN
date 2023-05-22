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
        renderItem={item => (
          <OrderCard
            items={item.item.items}
            user={item.item.user}
            address={item.item.address}
            deliveryTime={item.item.deliveryTime}
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
