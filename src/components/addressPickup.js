import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const AddressPickup = ({placeholderText, containerStyle, fetchAddress}) => {

const onPressAddress = (data, details) => {
    console.log("details===>>>>", details);
    const lat = details.geometry.location.lat
    const lng = details.geometry.location.lng
    fetchAddress(lat, lng)
}

  return (
    <View style={[styles.container, containerStyle]}>
      <GooglePlacesAutocomplete
        placeholder={placeholderText}
        onPress={onPressAddress}
        fetchDetails={true}
        query={{
          key: 'AIzaSyBK60wu292yLRtOcFSSWXkjnmEqTE9UI04',
          language: 'en',
        }}
      /> 
    </View>
  );
};

const styles= StyleSheet.create({
    container: {
        flexGrow: 1
    }
})
export default AddressPickup;
