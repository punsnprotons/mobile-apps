import React from 'react'
import {Text,View,Button,StyleSheet} from 'react-native'

const BoxColor = (props) =>{

    return (
        <View>
            <Text>{props.color}</Text>
            <Button title={`Increase ${props.color}`} onPress={()=>props.onIncrease()}/>
            <Button title={`Decrease ${props.color}`} onPress={()=>props.onDecrease()}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default BoxColor