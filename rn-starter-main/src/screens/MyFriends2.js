import React from 'react'
import {Text,View,FlatList,StyleSheet} from 'react-native'

const MyFriends2 = () =>{

    const friendsList = [
        {name:"Friend 1"},
        {name:"Friend 2"},
        {name:"Friend 3"},
        {name:"Friend 4"}

    ]
    return (
        <View>
            <Text style={styles.headerStyle}>My Friends List</Text>
            <FlatList
                keyExtractor= {(item) => item.name}
                data = {friendsList}
                renderItem = {({item}) => {return <Text style={styles.listTextStyle}>{item.name}</Text>}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listTextStyle:{
        fontSize:30
    },
    headerStyle:{
        fontSize:50
    }
})

export default MyFriends2