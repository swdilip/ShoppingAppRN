import React, {useContext} from 'react';
import {Text, ScrollView} from 'react-native';
import {ShopCartContext} from '../context/ShopCartContext';
import ProductCard from '../components/ProductCard';

export default function ({navigation}) {
  const {items, setItems} = useContext(ShopCartContext);

  return (
    <ScrollView>
      <Text>Home Screen</Text>
      {items &&
        items.map((item, i) => (
          <ProductCard product={item} navigation={navigation} key={i} />
        ))}
    </ScrollView>
  );
}
