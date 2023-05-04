import React, {useContext, useState, useEffect} from 'react';
import {Image, Text, View, Button, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ShopCartContext} from '../context/ShopCartContext';

export default function ProductScreen() {
  const route = useRoute();
  const productId = route.params?.productId;
  const {items, setItems} = useContext(ShopCartContext);

  const [product, setProduct] = useState();

  useEffect(() => {
    async function getProduct() {
      const productDetails = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
      );
      const json = await productDetails.json();
      setProduct(json);
    }
    getProduct();
  }, [productId]);

  return (
    product && (
      <View>
        <Text>{product.title}</Text>
        <View>
          <Image
            source={{uri: product.image}}
            style={{width: 150, height: 150}}
          />
        </View>
        <Text>Category: {product.category}</Text>
        <Text>Description: {product.description}</Text>
        <Text>
          Rating: {product.rating.rate} by {product.rating.count} Users
        </Text>
        <Text>Price: {product.price}</Text>
        <Button
          title="Add to Cart"
          onPress={() => {
            setItems([...items, product]);
            Alert.alert('Added to Cart!');
          }}
        />
      </View>
    )
  );
}
