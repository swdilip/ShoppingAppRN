import React, {createContext, useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserAuthContext = createContext([]);
// const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

export const UserAuthProvider = ({children}) => {
  const [token, setToken] = useState<string | null>(null);
  const [appLoaded, setAppLoaded] = useState(false);
  const isLoggedIn = !!token;

  useEffect(() => {
    async function restore() {
      await restoreApp();
    }
    restore();
  }, []);

  const restoreApp = useCallback(async () => {
    const tempToken = await AsyncStorage.getItem('token');
    setToken(tempToken);
    // We might do more things here if the user is logged in
    // Get user profile
    // Check for notifications
    setAppLoaded(true);
  }, []);

  const login = useCallback(async (newToken: string) => {
    await AsyncStorage.setItem('token', newToken);
    setToken(newToken);
  }, []);

  const logOut = useCallback(async () => {
    await AsyncStorage.clear();
    setToken(null);
  }, []);

  return (
    <UserAuthContext.Provider value={{appLoaded, isLoggedIn, login, logOut}}>
      {children}
    </UserAuthContext.Provider>
  );
};