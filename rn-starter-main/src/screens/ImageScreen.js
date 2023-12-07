import React from 'react'
import {Text,View, StyleSheet} from 'react-native'
//import ImageDetail from '../components/ImageDetail'
import ImageDetail from '../components /ImageDetail'

const ImageScreen = () =>{
    return (
        <View>
            <ImageDetail 
                title='Forest'
                imageSource={require('../../assets/forest.jpg')}
                score = {6}
            />
            <ImageDetail 
                title='Beach' 
                imageSource={require('../../assets/beach.jpg')}
                score = {8}
            />
            <ImageDetail 
                title='Mountain' 
                imageSource={require('../../assets/mountain.jpg')}
                score = {10}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle:{
        fontSize: 50,
        padding:10
    }
})

export default ImageScreen