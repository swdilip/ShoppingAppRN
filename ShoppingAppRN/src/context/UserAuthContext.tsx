import React, {createContext, useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserAuthContext {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  appLoaded: Boolean;
  isLoggedIn: Boolean;
  login: (token: string) => Promise<void>;
  logOut: () => Promise<void>;
}

export const UserAuthContext = createContext<UserAuthContext>({
  user: null,
  setUser: undefined!,
  isLoggedIn: false,
  appLoaded: false,
  login: undefined!,
  logOut: undefined!,
});

export const UserAuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [appLoaded, setAppLoaded] = useState(false);
  const isLoggedIn = !!token;

  useEffect(() => {
    async function restore() {
      await restoreApp();
    }
    restore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <UserAuthContext.Provider
      value={{user, setUser, appLoaded, isLoggedIn, login, logOut}}>
      {children}
    </UserAuthContext.Provider>
  );
};

export function useAuthContext() {
  return React.useContext(UserAuthContext);
}
