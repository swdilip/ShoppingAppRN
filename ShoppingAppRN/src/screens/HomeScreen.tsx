import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import ProductCard from '../components/ProductCard';
import {HomeScreenProps} from '../routes/Routes';
import {Product} from '../Types';

import {View, Text} from 'react-native';

export default function HomeScreen({navigation}: HomeScreenProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const productsList = await fetch('https://fakestoreapi.com/products/');
      const json = await productsList.json();
      console.log(navigation);
      setProducts(json);
    }

    getProducts();
  }, []);

  return (
    <FlatList
      data={products}
      ListEmptyComponent={
        <View>
          <Text>No Products to display</Text>
        </View>
      }
      renderItem={product => (
        <ProductCard product={product.item} navigation={navigation} />
      )}
    />
  );
}
