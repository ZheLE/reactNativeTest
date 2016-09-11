'use strict';
import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View,
  Text,
} from 'react-native';
import Home from './page/Home';
var {height, width} = Dimensions.get('window');
class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex:1}}>
      <Image
        style={{flex:1,width:width,height:height}}
        source={require('./image/ic_welcome.png')}
        />
      </View>
    );
  }
}
export default Splash;