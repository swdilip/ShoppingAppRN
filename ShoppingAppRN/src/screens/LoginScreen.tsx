import {Text, Button, View} from 'react-native';
import {UserAuthContext} from '../context/UserAuthContext';
import React, {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const {setLoggedIn} = useContext(UserAuthContext);

  return (
    <View>
      <Text>login</Text>
      <Button
        title="Log In"
        onPress={async () => {
          setLoggedIn(true);
          await AsyncStorage.setItem('loggedIn', 'true');
        }}
      />
    </View>
  );
}
