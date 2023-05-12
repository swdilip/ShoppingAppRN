import {Text, Button, View} from 'react-native';
import {UserAuthContext} from '../context/UserAuthContext';
import React, {useCallback, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const {login} = useContext(UserAuthContext);
  const navigation = useNavigation();

  const loginUser = async () => {
    // 1. Make an HTTP Post request with my email and password
    // 2. Response - can have a token or not (200 OK, 403 Unauthorized)
    // 3. If the response is 200, store the token in storage AND in context
    const response = {statusCode: 200, data: {token: '123-456-789'}};
    await login(response.data.token);
    navigation.reset({routes: [{name: 'App'}]});
  };

  return (
    <View>
      <Text>login</Text>
      <Button
        title="Log In"
        onPress={async () => {
          loginUser();
        }}
      />
    </View>
  );
}
