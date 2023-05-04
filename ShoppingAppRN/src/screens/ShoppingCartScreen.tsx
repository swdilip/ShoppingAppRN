import React, {useContext, useEffect} from 'react';
import {Text, ScrollView, Button, View} from 'react-native';
import {ShopCartContext} from '../context/ShopCartContext';
import ProductCard from '../components/ProductCard';

export default function ({navigation}) {
  const {items, setItems} = useContext(ShopCartContext);

  function removeItem(itemCartId) {
    const updatedItems = items.filter(item => item.cartId !== itemCartId);
    setItems(updatedItems);
  }

  return (
    <ScrollView>
      {items &&
        items.map((item, i) => (
          <View>
            <ProductCard
              product={item.product}
              navigation={navigation}
              key={i}
            />
            <Text>{item.cartId}</Text>
            <Button
              title="Remove from Cart"
              onPress={() => {
                removeItem(item.cartId);
              }}
            />
          </View>
        ))}
    </ScrollView>
  );
}
