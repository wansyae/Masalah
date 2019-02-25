import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Text>Wan Muhammad Syahir Bin Wan Shamsuddin</Text>
        <Text>1619911</Text> 
      <Text>Aizad Zarith</Text>
        <Text>1610455</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
