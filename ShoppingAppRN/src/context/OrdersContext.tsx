import React, {createContext, useState} from 'react';
import {Order} from '../Types';

//Create a type for order
//Would be similar to ShopCartContext

interface OrdersContext {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

export const OrdersContext = createContext<OrdersContext>({
  orders: [],
  setOrders: undefined!,
});

export const OrdersProvider = ({children}: {children: React.ReactNode}) => {
  const [orders, setOrders] = useState<Order[]>([]);

  return (
    <OrdersContext.Provider value={{orders, setOrders}}>
      {children}
    </OrdersContext.Provider>
  );
};
