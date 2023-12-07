import React, {useState} from 'react'
import {Text,View,Button,StyleSheet} from 'react-native'
import BoxColor from '../components /BoxColor'


const boxColorScreen = () => { 
    const COLOR_DIFF = 10

    const [red,setRed] = useState(0)
    const [green,setGreen] = useState(0)
    const [blue,setBlue] = useState(0)
    return (
        <View>
           <BoxColor 
                color="Red" 
                onIncrease={() => setRed(red + COLOR_DIFF)}
                onDecrease={() => setRed(red - COLOR_DIFF)}
            />
            <BoxColor 
                color="Green" 
                onIncrease={() => setGreen(green + COLOR_DIFF)}
                onDecrease={() => setGreen(green - COLOR_DIFF)}
            />
            <BoxColor 
                color="Blue" 
                onIncrease={() => setBlue(blue + COLOR_DIFF)}
                onDecrease={() => setBlue(blue - COLOR_DIFF)}
            />

            <View style={{width:100,height:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>

        </View>
    )
}

const styles = StyleSheet.create({})

export default boxColorScreen 