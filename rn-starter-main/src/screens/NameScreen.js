import React, {useState} from 'react'
import {Text,View,Button,StyleSheet} from 'react-native'

const NameScreen = () =>{

    const [name,setName] = useState('')

    return(
        <View>
            <Text>What's your name?</Text>
            <Text>{name}</Text>
            <Button title="Enter" onPress={() =>{setName}}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default NameScreen 