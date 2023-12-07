import React from 'react'
import {Text,View,StyleSheet,TextInput} from 'react-native'
import { EvilIcons } from '@expo/vector-icons'; 


const SearchBar = (props) =>{
    return (
        <View style={styles.barStyle}>
            <EvilIcons name="search" size={40} color="black" alignSelf="center" marginHorizontal={10} />
            <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.inputStyle}
                placeholder="Search"
                value = {props.term}
                onChangeText = {newTerm => props.onTermChange(newTerm)}
                onEndEditing = {() => props.onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    barStyle:{
        backgroundColor:'gray',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row'
    }, 
    inputStyle:{
        //borderColor:'black',
        //borderWidth:1,
        flex:1,
        fontSize:20
    }
})

export default SearchBar 