import React from 'react';
import {Text,View,StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    
    const friendsList = [
        {name:"Friend # 1", age:20},
        {name:'Friend # 2', age:30},
        {name:'Friend # 3', age:40},
        {name:'Friend # 4', age:50},
        {name:'Friend # 5', age:60},
        {name:'Friend # 6', age:70},
        {name:'Friend # 7', age:23},
        {name:'Friend # 8', age:22},
        {name:'Friend # 9', age:21}
    ]


    return (
       <View>
        <Text style={styles.headerStyle}>My Friends List</Text>
        <FlatList
        //horizontal 
        //showsHorizontalScrollIndicator = {false}
        keyExtractor = {item => item.name}
        data={friendsList} 
        renderItem = {({item}) => {return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>}}
        />
       </View>
    )
}

const styles = StyleSheet.create({
    headerStyle : {fontSize: 50},
    textStyle: {marginVertical:50}
})

export default ListScreen 


