import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

export default function () {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getProducts() {
      const productsList = await fetch('https://fakestoreapi.com/products/1');
      const json = await productsList.json();

      setProducts(json);
    }

    getProducts();
  }, []);
  return <Text>Home Screen</Text>;
}
