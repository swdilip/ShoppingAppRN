import React, {useContext, useState, useEffect} from 'react';
import {Image, Text, View, Button, Alert, StyleSheet} from 'react-native';
import {ShopCartContext} from '../context/ShopCartContext';
import {ProductScreenProps} from '../routes/Routes';
import {Product} from '../Types';

export default function ProductScreen({route}: ProductScreenProps) {
  const productId = route.params?.productId;
  const {items, setItems} = useContext(ShopCartContext);

  const [product, setProduct] = useState<Product>();

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

  function addItem() {
    let productToAdd;
    if (items.length > 0) {
      const prevCartId = items.slice(-1)[0].cartId;
      productToAdd = {cartId: prevCartId + 1, product: product};
    } else {
      productToAdd = {cartId: 0, product: product};
    }

    setItems([...items, productToAdd]);
    Alert.alert('Added to Cart!');
  }

  return product ? (
    <View>
      <Text>{product.title}</Text>
      <View>
        <Image source={{uri: product.image}} style={styles.imageStyle} />
      </View>
      <Text>Category: {product.category}</Text>
      <Text>Description: {product.description}</Text>
      <Text>
        Rating: {product.rating.rate} by {product.rating.count} Users
      </Text>
      <Text>Price: {product.price}</Text>
      <Button title="Add to Cart" onPress={addItem} />
    </View>
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
  },
});
