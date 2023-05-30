import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RatingStars({rate, count}) {
  let starNames = [];

  const numBeforeDecimal = rate.toString().split('.')[0];

  return (
    <View style={styles.starsContainer}>
      {/* <Text>
        {rate} by {count} Users
      </Text> */}
      {console.log(rate)}
      {console.log(numBeforeDecimal)}
      <Icon name="star" size={30} color="#9D8189" />
      <Icon name="star" size={30} color="#9D8189" />
      <Icon name="star-half-o" size={30} color="#9D8189" />
      <Icon name="star-o" size={30} color="#9D8189" />
      <Icon name="star-o" size={30} color="#9D8189" />
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
