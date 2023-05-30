import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function MapScreen() {
  return (
    <View>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 51.509865,
          longitude: -0.118092,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 51.499406, longitude: -0.124798}}
          title="Warehouse">
          <View>
            <Icon name="warehouse" size={20} color="red" />
          </View>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 720,
  },
});
