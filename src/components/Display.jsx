import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    display:{
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems:'flex-end'
    },
    displayValue:{
        fontSize: 60,
        color: '#fff'
    }
})

export default props => {
    return(
        <View style={estilo.display}>
            <Text style={estilo.displayValue}
            numberOfLines={1}>{props.value}</Text>
        </View>
    )
}