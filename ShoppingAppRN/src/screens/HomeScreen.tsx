import React, {useState, useEffect} from 'react';
import {Text, ScrollView, FlatList} from 'react-native';

import ProductCard from '../components/ProductCard';

export default function ({navigation}) {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getProducts() {
      const productsList = await fetch('https://fakestoreapi.com/products/');
      const json = await productsList.json();
      setProducts(json);
    }

    getProducts();
  }, []);

  return (
    products && (
      <FlatList
        data={products}
        renderItem={product => (
          <ProductCard product={product.item} navigation={navigation} />
        )}
      />
    )
  );
}
