import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { locationPermission, getCurrentLocation  } from '../helper/helperFunction';
// import Button from '../components/button';

const Home = ({navigation}) => {



    useEffect(() =>{
        getLiveLocation() 
        const interval = setInterval(() => {
            getLiveLocation()
        }, 60000);
        return () =>clearInterval(interval) 
    }, [])



    const getLiveLocation = async () => {
        const locPermissionDenied = await locationPermission()
        if(locPermissionDenied){
            const {latitude, longitude } = await getCurrentLocation()
            console.log("get live location after 4 sce");
            setState({
                ...state,
                pickupCords: {latitude, longitude}
            })
            // console.log("res====>>>>", res );
        }
    }

  const [state, setState] = useState({
    pickupCords: {
      latitude: 31.5204,
      longitude: 74.3587,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCords: {
    //   latitude: 31.7167,
    //   longitude: 73.985,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    },
  });
  const mapRef = useRef();
  const {pickupCords, droplocationCords} = state;

  const onPressLocation = () => {
    navigation.navigate('chooseLocation', {getCordinates: fetchValues});
  };

  const fetchValues = data => {
    setState({
      pickupCords: {
          latitude: data.pickupCords.latitude,
          longitude: data.pickupCords.longitude,
       },
      droplocationCords: {
        latitude: data.destinationCords.latitude,
        longitude: data.destinationCords.longitude,
      },
    });
    console.log('data====>>>>', data);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={pickupCords}>
          <Marker coordinate={pickupCords} />
          {Object.keys(droplocationCords).length > 0 && (
            <Marker coordinate={droplocationCords}/>)}
          {Object.keys(droplocationCords).length > 0 && (<MapViewDirections
            origin={pickupCords}
            destination={droplocationCords}
            apikey={'AIzaSyBK60wu292yLRtOcFSSWXkjnmEqTE9UI04'}
            strokeWidth={3}
            strokeColor={'red'}
            optimizeWaypoints={true}
            onReady={result => {
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  Bottom: 300,
                  left: 30,
                  Top: 100,
                },
              });
            }}
          />)}
        </MapView>
      </View>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Where you want to go ...</Text>
        <TouchableOpacity
          style={styles.buttinContainer}
          onPress={onPressLocation}>
          <Text style={styles.textStyle}>Choose your Location</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  textStyle: {fontSize: 15, color: '#000'},
  buttinContainer: {
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default Home;
