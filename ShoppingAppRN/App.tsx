import React from 'react';

import {ShopCartProvider} from './src/context/ShopCartContext';
import {UserAuthProvider} from './src/context/UserAuthContext';
import {OrdersProvider} from './src/context/OrdersContext';

import Navigators from './src/routes/Routes';

function App(): JSX.Element {
  return (
    <UserAuthProvider>
      <ShopCartProvider>
        <OrdersProvider>
          <Navigators />
        </OrdersProvider>
      </ShopCartProvider>
    </UserAuthProvider>
  );
}

export default App;
