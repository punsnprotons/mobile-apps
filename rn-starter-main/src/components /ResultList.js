import React from 'react'
import {Text,View,StyleSheet,FlatList} from 'react-native'
import ResultDetail from '../../src/components /ResultDetail.js'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {withNavigation} from 'react-navigation'

const ResultList = ({title, results, navigation }) =>{

    if (!results.length){
        return null
    }
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal = {true}
                keyExtractor = {(result) =>{result.id}}
                data = {results}
                renderItem = {({item})=>{return (
                <TouchableOpacity onPress={() => {navigation.navigate('MoreDetail', {id:item.id})}}>
                    <ResultDetail result={item}/>
                </TouchableOpacity>
                )}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:25,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom:10,
        marginTop:10
    }
})

export default withNavigation(ResultList)