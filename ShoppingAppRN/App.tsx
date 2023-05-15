import React from 'react';

import {ShopCartProvider} from './src/context/ShopCartContext';
import {UserAuthProvider} from './src/context/UserAuthContext';

import Navigators from './src/routes/Routes';

function App(): JSX.Element {
  return (
    <UserAuthProvider>
      <ShopCartProvider>
        <Navigators />
      </ShopCartProvider>
    </UserAuthProvider>
  );
}

export default App;
