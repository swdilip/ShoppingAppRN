import React, {useState, useEffect, useContext} from 'react';
import {Button, FlatList} from 'react-native';

import ProductCard from '../components/ProductCard';
import {HomeScreenProps} from '../routes/Routes';
import {Product} from '../Types';

import {View, Text} from 'react-native';
import {UserAuthContext} from '../context/UserAuthContext';

export default function HomeScreen({navigation}: HomeScreenProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const {logOut} = useContext(UserAuthContext);

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
      ListHeaderComponent={<Button title="Logout" onPress={logOut} />}
    />
  );
}
