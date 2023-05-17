import React, {useState, useEffect} from 'react';
import {Button, FlatList} from 'react-native';

import ProductCard from '../components/ProductCard';
import {HomeScreenProps} from '../routes/Routes';
import {Product} from '../Types';

import {View, Text} from 'react-native';
import {useAuthContext} from '../context/UserAuthContext';

export default function HomeScreen({navigation}: HomeScreenProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const {logOut} = useAuthContext();

  useEffect(() => {
    async function getProducts() {
      const productsList = await fetch('https://fakestoreapi.com/products/');
      const json = await productsList.json();
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
      ListHeaderComponent={
        <Button
          title="Logout"
          onPress={async () => {
            await logOut();
            navigation.reset({routes: [{name: 'LoginStack'}]});
          }}
        />
      }
    />
  );
}
