import {Text,Button,View, StyleSheet} from 'react-native'
import React,{useReducer} from 'react'

const reducer = (state,action) =>{
    //state = {count : number}
    // action  = {type: change_count , payload: 1}
    return {...state,count:state.count + action.payload}
}

const CounterScreen = () =>{
    
    const [state,dispatch] = useReducer(reducer,{count:0})

    return (
        <View>
            <Text style={styles.headerStyle}>Counter</Text>
            <Text style={styles.counterStyle}>{state.count}</Text>
            <Button title="Increase" onPress= {()=> {dispatch({type:'change_count',payload:1})}}/>
            <Button title="Decrease" onPress= {()=> {dispatch({type:'change_count',payload:-1})}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle : {
        fontSize: 40,
        textAlign:'center'
    },
    counterStyle: {
        fontSize: 100,
        textAlign:'center'
    }
})

export default CounterScreen


