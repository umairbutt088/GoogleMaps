import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import AddressPickup from '../components/addressPickup';
import CustomButton from '../components/customButton';

const chooseLocation = () => {
  const navigation = useNavigation();
  const onDone = () => {
    navigation.goBack();
  };


  const fetchAddressCords = (lat, lng) => {
      console.log("latitude===>>>>", lat);
      console.log("longitude===>>>>", lng);
  }
  const fetchDestinationCords = (lat, lng) => {
      console.log("latitude===>>>>", lat);
      console.log("longitude===>>>>", lng);
  }

  return (
    <SafeAreaView style={styles.container}>
      <AddressPickup
        placeholderText="Choose Your Pickup Location"
        containerStyle={[styles.inputStyle, {zIndex: 10, top: 10}]}
        fetchAddress = {fetchAddressCords}
      />
      <AddressPickup
        placeholderText="Choose Your Destination  Location"
        containerStyle={[styles.inputStyle, {zIndex: 5}]}
        fetchAddress = {fetchDestinationCords}
      />
      {/* <TouchableOpacity
          style={styles.BtnMainContainer}>
          <Text style={{fontSize: 15, color: '#000'}}>Submit</Text>
        </TouchableOpacity> */}
      <CustomButton
        btnStyle={styles.BtnMainContainer}
        btnText={'Done '}
        onPress={onDone}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  inputStyle: {
    width: '100%',
    position: 'absolute',
    top: 70,
  },
  BtnMainContainer: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 150,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default chooseLocation;
