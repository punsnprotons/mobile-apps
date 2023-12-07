import React,{useReducer} from 'react'
import {Text,View,Button,StyleSheet} from 'react-native'
import ColorCounter from '../components /ColorCounter'

const reducer = (state,action) =>{
    // state === {red:number,green:number,blue:number}
    // action === {colorTochange : 'red' || 'green' || 'blue', amount : 10 || -10}

    switch(action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state,red: state.red + action.payload}
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state,green: state.green + action.payload}
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state,blue: state.blue + action.payload}
        default:
            return state 
        
    }

}

const SquareScreen = () => {
  

    const COLOR_INCREMENT = 20
    const COLOR_DECREMENT = -20

    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0})

  

   
    return (
        <View>
            <Text>Color setter</Text>
            <ColorCounter 
                color='red'
                onIncrease={()=>{dispatch({type:'change_red', payload:COLOR_INCREMENT})}} 
                onDecrease={() =>{dispatch({type:'change_red',payload:COLOR_DECREMENT})} } 
                
            />
            <ColorCounter 
                color='green'
                onIncrease={()=>{dispatch({type:'change_green', payload:COLOR_INCREMENT})}} 
                onDecrease={() =>{dispatch({type:'change_green',payload:COLOR_DECREMENT})} } 
                
            />
            <ColorCounter
                color='blue' 
                onIncrease={()=>{dispatch({type:'change_blue', payload:COLOR_INCREMENT})}} 
                onDecrease={() =>{dispatch({type:'change_blue',payload:COLOR_DECREMENT})} } 
        
            />
            <View style={{width: 200, height:200,alignContent:'center', backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen 
