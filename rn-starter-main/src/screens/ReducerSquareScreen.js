import React,{useReducer} from 'react'
import {Text,View,Button,StyleSheet} from 'react-native'
import ColorCounter from '../components /ColorCounter'

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT  = -1* COLOR_INCREMENT ;

const ReducerSquareScreen = () => {

    const reducer = (state,action) =>{
        //state === {red:number,green:number, blue:number}
        //acttion ==={colorToChange:'red' || 'green' || 'blue', amount:15||-15}
        switch(action.colorToChange){
            case 'red':
                return {...state,red: state.red + action.amount}
            case 'green':
                return {...state,green: state.green + action.amount}
            case 'blue':
                return {...state,blue: state.blue + action.amount}
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0})
    const {red, green, blue} = state
    return (
        <View>
            <Text>We will use use reducers to set color</Text>
            <ColorCounter 
                color='red'
                onIncrease={()=>dispatch({colorToChange:'red', amount:COLOR_INCREMENT })}
                onDecrease={()=> dispatch({colorToChange:'red', amount: COLOR_DECREMENT})}
            />
            <ColorCounter 
                color='green'
                onIncrease={()=> dispatch({colorToChange:'green', amount:COLOR_INCREMENT })}
                onDecrease={()=> dispatch({colorToChange:'green', amount:COLOR_DECREMENT })}
            />
            <ColorCounter 
                color='blue'
                onIncrease={()=> dispatch({colorToChange:'blue', amount:COLOR_INCREMENT })}
                onDecrease={()=> dispatch({colorToChange:'blue', amount:COLOR_DECREMENT })}
            />
            <View style={{width:100, height:100, backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ReducerSquareScreen 
