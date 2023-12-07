import React,{useState} from 'react'
import {Text,View,Button,StyleSheet} from 'react-native'

const Counter2 = () => {

    const [count,setCount] = useState(0)

    const changeCount = (action,count) =>{
        switch(action){
            case 'increase':
                return count>=0 ? setCount(count +1) : count
            case 'decrease':
                return count>=0 ? setCount(count -1) : count
            default:
                return count
        }
    }
    

    return (
        <View>
            <Text>This is a copy of counter</Text>
            <Text style={styles.counterStyle}>{count}</Text>
            <Button title="More" onPress={() => {changeCount('increase',count)}}/>
            <Button title="Less" onPress={() => {changeCount('decrease',count)}}/>

        </View>
    )
}

const styles = StyleSheet.create({
    counterStyle:{
        fontSize:60,
        textAlign:'center'
    }
})
export default Counter2