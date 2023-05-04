import React, {useContext, useEffect} from 'react';
import {Text, ScrollView, Button, View, FlatList} from 'react-native';
import {ShopCartContext} from '../context/ShopCartContext';
import ProductCard from '../components/ProductCard';

export default function ({navigation}) {
  const {items, setItems} = useContext(ShopCartContext);

  function removeItem(itemCartId) {
    const updatedItems = items.filter(item => item.cartId !== itemCartId);
    setItems(updatedItems);
  }

  return items.length > 0 ? (
    <FlatList
      data={items}
      renderItem={item => (
        <View>
          <ProductCard product={item.item.product} navigation={navigation} />
          <Button
            title="Remove from Cart"
            onPress={() => {
              removeItem(item.item.cartId);
            }}
          />
        </View>
      )}
    />
  ) : (
    <Text>No Items in your Cart!</Text>
  );
}
