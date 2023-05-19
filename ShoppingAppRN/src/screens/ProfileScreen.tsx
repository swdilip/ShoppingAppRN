import React, {useContext} from 'react';

import {Text, View, FlatList} from 'react-native';
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
    <View>
      <Text>{name}</Text>
      <Text>{address}</Text>
    </View>
  );
}
