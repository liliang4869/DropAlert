/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TouchableOpacity
} from 'react-native';
import DropAlert from './src/DropAlert'
export default class DropAlertDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={{height:50,width:100,backgroundColor:'#FFC125',borderRadius:5}} onPress={()=>{this.da.changeVisiable()}}/>
      <DropAlert ref={(ref)=>{this.da=ref}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DropAlertDemo', () => DropAlertDemo);
