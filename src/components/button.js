import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Where you want to go ...</Text>
      <TouchableOpacity
        style={styles.buttinContainer}
        onPress={() => navigation.navigate('chooseLocation')}>
        <Text style={styles.textStyle}>Choose your Location</Text>
      </TouchableOpacity>
    </View>
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
export default Button;
