import React, {useContext} from 'react';
import {Text, ScrollView, Button, View} from 'react-native';
import {ShopCartContext} from '../context/ShopCartContext';
import ProductCard from '../components/ProductCard';

export default function ({navigation}) {
  const {items, setItems} = useContext(ShopCartContext);

  function removeItem(itemId) {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  }

  return (
    <ScrollView>
      <Text>Home Screen</Text>
      {items &&
        items.map((item, i) => (
          <View>
            <ProductCard product={item} navigation={navigation} key={i} />
            <Button
              title="Remove from Cart"
              onPress={() => {
                removeItem(item.id);
              }}
            />
          </View>
        ))}
    </ScrollView>
  );
}
