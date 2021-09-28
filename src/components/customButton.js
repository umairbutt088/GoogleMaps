import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CustomButton = ({
    onPress= () => {},
    btnStyle =  {},
    btnText,
}) => {


    return (
        <TouchableOpacity style={styles.container} onPress={onPress}
            style={[styles.btnStyle , btnStyle]}>
            <Text>{btnText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    btnStyle: {
        height: 48,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal: 10,
        borderWidth: 1

    }
})

export default CustomButton;
