import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';

interface Props {
  onPress: () => void;
  title: string;
}

export default function ThemedButton({onPress, title}: Props) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 15,
    backgroundColor: '#F4ACB7',
    borderRadius: 8,
    elevation: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
