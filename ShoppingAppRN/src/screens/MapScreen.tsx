import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {constants} from '../utils/constants';

type Props = {
  lat: number;
  lng: number;
};

export default function MapScreen({lat, lng}: Props) {
  return (
    <View>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 51.509865, //London
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
        <Marker coordinate={{latitude: lat, longitude: lng}} title="Customer">
          <View>
            <Icon name="grin-alt" size={20} color="red" />
          </View>
          {/* <Image
            source={{uri: 'https://i.imgur.com/pCpQj1Z.png'}}
            style={{width: 48, height: 48}}
          /> */}
        </Marker>
        <MapViewDirections
          origin={{latitude: 51.499406, longitude: -0.124798}} //Warehouse
          destination={{latitude: lat, longitude: lng}}
          apikey={constants.GOOGLE_API_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 250,
  },
});
