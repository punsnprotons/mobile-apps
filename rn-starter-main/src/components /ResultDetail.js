import React from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'

 const ResultDetail = ({result}) =>{
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle}source={{uri: result.image_url}}/>
            <Text style={styles.textStyle}>{result.name}</Text>
            <Text>{result.rating} rating , {result.review_count} reviews</Text>
        </View>
    )
 }

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    imageStyle:{
        width:250,
        height:120,
        borderRadius:4
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:15
    }

})

export default ResultDetail