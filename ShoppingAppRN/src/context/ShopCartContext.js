import React, {createContext, useState} from 'react';

export const ShopCartContext = createContext([]);

export const ShopCartProvider = ({children}) => {
  const [items, setItems] = useState([]);

  return (
    <ShopCartContext.Provider value={{items, setItems}}>
      {children}
    </ShopCartContext.Provider>
  );
};
