import React, {useContext, useState, useEffect} from 'react';
import {
  Image,
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
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
    <ScrollView>
      <View style={styles.backgroundContainer}>
        <View style={styles.imageView}>
          <Image source={{uri: product.image}} style={styles.imageStyle} />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.titlePriceContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>£{product.price}</Text>
          </View>
          <View style={styles.attributeContainer}>
            <Text style={styles.attributeKey}>Category</Text>
            <Text>{product.category}</Text>
          </View>
          <View style={styles.attributeContainer}>
            <Text style={styles.attributeKey}>Description</Text>
            <Text>{product.description}</Text>
          </View>
          <View style={styles.attributeContainer}>
            <Text style={styles.attributeKey}>Rating</Text>
            <Text>
              {product.rating.rate} by {product.rating.count} Users
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Add to Cart" onPress={addItem} />
          </View>
        </View>
      </View>
    </ScrollView>
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 0.9,
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titlePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#F4ACB7',
  },
  backgroundContainer: {
    backgroundColor: '#D8E2DC',
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  attributeContainer: {
    marginBottom: 10,
  },
  attributeKey: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});
