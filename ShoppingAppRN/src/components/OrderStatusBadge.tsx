import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface OrderStatusBadgeProps {
  deliveryTime: number;
}

export default function OrderStatusBadge({
  deliveryTime,
}: OrderStatusBadgeProps) {
  const currentTime = new Date(Date.now());
  const [delivered, setDelivered] = useState(false);

  function deliveryStatusUpdater() {
    setDelivered(true);
  }

  useEffect(() => {
    const deliveryTimeOut = setTimeout(
      deliveryStatusUpdater,
      deliveryTime - currentTime.getTime(),
    );

    return () => clearTimeout(deliveryTimeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      {delivered ? (
        <Text style={styles.deliveredStatusText}>Delivered</Text>
      ) : (
        <Text style={styles.processingStatusText}>Processing</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  deliveredStatusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  processingStatusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});
