import React,{useState, useEffect} from 'react'
import {Text,View,StyleSheet,Image,FlatList} from 'react-native'
import yelp from '../../src/api/yelp.js'
 

const MoreDetail = ({navigation}) =>{
    const id = navigation.getParam('id')
    const [result,setResult] = useState(null)
    console.log(result)

    const getResult = async (id) =>{
        const response = await yelp.get(`${id}`)
        setResult(response.data)
    }
    useEffect(() =>{
        getResult(id)
    },[])

    if (!result){
        return null
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor = {photo => photo}
                renderItem= {({item}) =>{
                    return(
                        <Image style={styles.imageStyle}source={{uri: item}}/>
                    )
                }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    imageStyle:{
        width:250,
        height:250
    }
})

export default MoreDetail