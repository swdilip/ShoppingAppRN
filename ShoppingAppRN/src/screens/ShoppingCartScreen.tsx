import React, {useContext, useEffect, useState} from 'react';
import {Text, Button, View, FlatList, StyleSheet} from 'react-native';
import {ShopCartContext} from '../context/ShopCartContext';
import ProductCard from '../components/ProductCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationProps} from '../Types';

export default function ({navigation}: NavigationProps) {
  const {items, setItems} = useContext(ShopCartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  function removeItem(itemCartId) {
    const updatedItems = items.filter(item => item.cartId !== itemCartId);
    setItems(updatedItems);
  }

  useEffect(() => {
    function sum(total, item) {
      return total + item.product.price;
    }
    const total = items?.reduce(sum, 0);

    setTotalPrice(total);
  }, [items]);

  return items.length > 0 ? (
    <View>
      <FlatList
        data={items}
        renderItem={item => (
          <View>
            <ProductCard product={item.item.product} navigation={navigation} />
            <Button
              title="Remove from Cart"
              onPress={() => {
                removeItem(item.item.cartId);
              }}
            />
          </View>
        )}
      />
      <Text>Total: £{totalPrice}</Text>
    </View>
  ) : (
    <View style={styles.cartEmptyView}>
      <Text style={styles.cartEmptyText}>No Items found in your 🛒!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cartEmptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartEmptyText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  itemDiscardBtn: {
    flex: 0.2,
  },
});
