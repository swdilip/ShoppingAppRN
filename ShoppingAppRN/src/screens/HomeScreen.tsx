import React, {useState, useEffect} from 'react';
import {Text, ScrollView} from 'react-native';

import ProductCard from '../components/ProductCard';

export default function ({navigation}) {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getProducts() {
      const productsList = await fetch('https://fakestoreapi.com/products/');
      const json = await productsList.json();
      console.log(json);
      setProducts(json);
    }

    getProducts();
  }, []);

  return (
    <ScrollView>
      <Text>Home Screen</Text>
      {products &&
        products.map(product => (
          <ProductCard product={product} navigation={navigation} />
        ))}
    </ScrollView>
  );
}
