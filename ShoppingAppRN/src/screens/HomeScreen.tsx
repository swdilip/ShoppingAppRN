import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import ProductCard from '../components/ProductCard';
import {NavigationProps} from '../Types';

export default function ({navigation}: NavigationProps) {
  const [products, setProducts] = useState();

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
