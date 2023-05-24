import React, {createContext, useState} from 'react';
import {Product} from '../Types';

interface ProductInCart {
  cartId: number;
  product: Product;
}

interface ShopCartContext {
  items: Array<ProductInCart>;
  setItems: React.Dispatch<React.SetStateAction<Array<ProductInCart>>>;
}

export const ShopCartContext = createContext<ShopCartContext>({
  items: [],
  setItems: undefined!,
});

export const ShopCartProvider = ({children}: {children: React.ReactNode}) => {
  const [items, setItems] = useState<Array<ProductInCart>>([]);

  return (
    <ShopCartContext.Provider value={{items, setItems}}>
      {children}
    </ShopCartContext.Provider>
  );
};
