import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserAuthContext = createContext([]);
// const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

export const UserAuthProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    async function restore() {
      const loggedInStatus = await AsyncStorage.getItem('loggedIn');
      console.log(loggedInStatus);

      if (JSON.parse(loggedInStatus)) {
        setLoggedIn(true);
      }
      setAppLoaded(true);
    }
    restore();
  }, []);
  return (
    <UserAuthContext.Provider value={{loggedIn, setLoggedIn, appLoaded}}>
      {children}
    </UserAuthContext.Provider>
  );
};
