import React,{useState,useEffect} from 'react'
import {Text,View,StyleSheet,ScrollView} from 'react-native'
import SearchBar from '../../src/components /SearchBar.js'
import useResults from '../../src/hooks/useResults'
import ResultList from '../../src/components /ResultList.js'

const SearchScreen = () =>{

    const [term,setTerm] = useState('')
    const [searchApi,results,errorMessage] = useResults()

    const filterResultsByPrice = (price) =>{
        return results.filter(result =>{
            return result.price === price
        })
    }

    return (
        <View style={{flex:1}}>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => {setTerm(newTerm)}}
                onTermSubmit = {()=> searchApi(term)}    
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <ScrollView>
                <ResultList  style={styles.section} results={filterResultsByPrice('$')} title="Cost effective"/>
                <ResultList  style={styles.section} results={filterResultsByPrice('$$')} title="Bit pricier"/>
                <ResultList  style={styles.section} results={filterResultsByPrice('$$$')} title="Big spender"/>
                <ResultList  style={styles.section} results={filterResultsByPrice('$$$$')} title="Fancy"/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    result:{
        marginTop:10
    }

})

export default SearchScreen 