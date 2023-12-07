import React,{useState} from 'react'
import {Text,View,Button,StyleSheet,FlatList} from 'react-native'

const ColorScreen2 = () =>{

    const [colors,setColors] = useState([])


    const randomRgb = () =>{
        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)

        return `rgb(${red},${green},${blue})`
    }
    
    return (
        <View>
            <Text>This is a copy of the color screen</Text>
            <Button title="Add new color" onPress={() => setColors([...colors,randomRgb()])}/>
            <FlatList
                keyExtractor = {({item}) => item}
                data = {colors}
                renderItem = {({item}) => {return <View style={{width: 50, height:50, backgroundColor: item}}/>} }
            />

        </View>
    )
}

const styles = StyleSheet.create({})

export default ColorScreen2