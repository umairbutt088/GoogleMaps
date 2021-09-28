import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import AddressPickup from '../components/addressPickup';
import CustomButton from '../components/customButton';
import {showError, showSuccess} from '../helper/helperFunction';

const chooseLocation = props => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    pickupCords: {},
    destinationCords: {},
  });
  const {pickupCords, destinationCords} = state;

  const checkValid = () => {
    if (Object.keys(pickupCords).length === 0) {
      showError('Please Enter Your Pickup Location');
      return false;
    }
    if (Object.keys(destinationCords).length === 0) {
      showError('Please Enter Your Destination Location');
      return false;
    }
    return true;
  };

  const onDone = () => {
    const isValid = checkValid();
    console.log('isValid _____!', isValid);
    if (isValid) {
      props.route.params.getCordinates({
        pickupCords,
        destinationCords,
      });
      showSuccess("Your Map is Here...")
      navigation.goBack();
    }
  };

  const fetchAddressCords = (lat, lng) => {
    setState({
      ...state,
      pickupCords: {
        latitude: lat,
        longitude: lng,
      },
    });
  };
  const fetchDestinationCords = (lat, lng) => {
    setState({
      ...state,
      destinationCords: {
        latitude: lat,
        longitude: lng,
      },
    });
  };

  //   console.log("pickupCords===>>>",pickupCords);
  //   console.log("destinationCords===>>>",destinationCords);
  console.log('props===>>>', props);

  return (
    <SafeAreaView style={styles.container}>
      <AddressPickup
        placeholderText="Choose Your Pickup Location"
        containerStyle={[styles.inputStyle, {zIndex: 10, top: 10}]}
        fetchAddress={fetchAddressCords}
      />
      <AddressPickup
        placeholderText="Choose Your Destination  Location"
        containerStyle={[styles.inputStyle, {zIndex: 5}]}
        fetchAddress={fetchDestinationCords}
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
