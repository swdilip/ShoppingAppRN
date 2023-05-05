import React from 'react';

import {ShopCartProvider} from './src/context/ShopCartContext';

import Navigators from './src/routes/Routes';

function App(): JSX.Element {
  return (
    <ShopCartProvider>
      <Navigators />
    </ShopCartProvider>
  );
}

export default App;
