import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = (props) => {
  return (
  <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button title="My Friends" onPress={() => props.navigation.navigate('List')}/>
    <Button title="About me" onPress={() => props.navigation.navigate('Components')}/>
    <Button title="See Images" onPress={() => props.navigation.navigate('Image')}/>
    <Button title="Go to counter" onPress={() => props.navigation.navigate('Counter')}/>
    <Button title="Go to color" onPress={() => props.navigation.navigate('Color')}/>
    <Button title="Sample Color" onPress={() => props.navigation.navigate('Square')}/>
    <Button title="Use Reducer to sample color" onPress={() => props.navigation.navigate('ReducerSquare')}/>
    <Button title="Signup form" onPress={() => props.navigation.navigate('Name')}/>
    <Button title="Copy of My Friends" onPress={() => props.navigation.navigate('MyFriends2')}/>
    <Button title="Copy of Counter" onPress={() => props.navigation.navigate('Counter2')}/>
    <Button title="Copy of Adding Colors" onPress={() => props.navigation.navigate('Color2')}/>
    <Button title="Change a box's color" onPress={() => props.navigation.navigate('boxColor')}/>
    <Button title="Whats your name" onPress={() => props.navigation.navigate('Name')}/>
    <Button title="Go to Box Demo" onPress={() => props.navigation.navigate('Box')}/>




  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
