import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'

const ImageDetail = (props) =>{
    console.log(props)
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text style={styles.headerStyle}>{props.title}</Text>
            <Text>Rating : {props.score}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize:40
    }
})

export default ImageDetail 