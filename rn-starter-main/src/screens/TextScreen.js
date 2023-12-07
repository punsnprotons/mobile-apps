import React,{useState} from 'react'
import {Text,View,StyleSheet,TextInput} from 'react-native'

const TextScreen = () =>{
    const [password,setPassword] = useState('')
    return (
        <View>
            <Text style={styles.headerStyle}>Enter Password</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value = {password}
            onChangeText = {(newPassword) => setPassword(newPassword)}
            />
            {password.length < 5 ? <Text>Password should be more than 5 characters</Text>: null}
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin:50,
        borderColor:'black',
        borderWidth: 1
    },
    headerStyle : {
        fontSize:50
    }
})

export default TextScreen 