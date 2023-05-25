import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RatingStars({rate, count}) {
  return (
    <View style={styles.starsContainer}>
      {/* <Text>
        {rate} by {count} Users
      </Text> */}
      <Icon name="star" size={30} color="#F4ACB7" />
      <Icon name="star" size={30} color="#F4ACB7" />
      <Icon name="star-half-o" size={30} color="#F4ACB7" />
      <Icon name="star-o" size={30} color="#F4ACB7" />
      <Icon name="star-o" size={30} color="#F4ACB7" />
    </View>
  );
}

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 3,
  },
});
