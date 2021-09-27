import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';




const App= () => {

const [state, setState] = useState({
  pickupCords: {
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  droplocationCords: {
    latitude: 31.7167,
    longitude: 73.9850,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
})
const mapRef = useRef()
const{pickupCords, droplocationCords} = state

  return (
    <SafeAreaView style={{ flex:1 ,backgroundColor:'red'}}>
      <MapView
        ref= {mapRef}
        style={StyleSheet.absoluteFill}
        initialRegion={pickupCords}
      >
          <Marker
            coordinate={pickupCords}
          />
          <Marker
            coordinate={droplocationCords }
          />
          <MapViewDirections
            origin={pickupCords}
            destination={droplocationCords}
            apikey={"AIzaSyBK60wu292yLRtOcFSSWXkjnmEqTE9UI04"}
            strokeWidth= {3}
            strokeColor={'red'}
            optimizeWaypoints={true}
            onReady = {result => {
              mapRef.current.fitToCoordinates(result.coordinates,{
                 edgePadding: {
                   right: 50,
                   bottom: 300,
                   left:50,
                   bottom: 100, 
                 }
              })
            }}
          />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
