'use strict';
import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View,
  Text,
} from 'react-native';

import AppMain from './page/AppMain.js';
var {height, width} = Dimensions.get('window');

class Splash extends React.Component {

  constructor(props) {
    super(props);

    //获取navigator对象
    const {navigator} = props;//可以
    //const {navigator} =this. props;//可以
    //const {navigator} = this.props.navigator;//这个是不可以的，会报错
    //const {navigator} = props.navigator;//这个是不可以的，会报错
      this.timer = setTimeout(() => {
        InteractionManager.runAfterInteractions(() => {
          navigator.resetTo({
            component: AppMain,
            name: 'AppMain'
          });
        });
      }, 2500);
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