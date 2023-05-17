import React, {createContext, useState} from 'react';
import {Product} from '../Types';

interface ShopCartContext {
  items: Array<Product>;
  setItems: React.Dispatch<React.SetStateAction<Array<Product>>>;
}

export const ShopCartContext = createContext<ShopCartContext>({
  items: [],
  setItems: undefined!,
});

export const ShopCartProvider = ({children}: {children: React.ReactNode}) => {
  const [items, setItems] = useState<Array<Product>>([]);

  return (
    <ShopCartContext.Provider value={{items, setItems}}>
      {children}
    </ShopCartContext.Provider>
  );
};
