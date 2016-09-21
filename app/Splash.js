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
/**获取手机屏幕的宽和高*/
var {height, width} = Dimensions.get('window');

class Splash extends React.Component {

  /***
   * 系统函数：构造器
   * 开始了一个定时器setTimeout（），2500豪秒后跳转到AppMain.js
   * @param props
   */
  constructor(props) {
    super(props);
    //获取navigator对象，在welcome.js传过来的
    const {navigator} = props;//可以
    //const {navigator} =this. props;//可以
    //const {navigator} = this.props.navigator;//这个是不可以的，会报错
    //const {navigator} = props.navigator;//这个是不可以的，会报错

    //这种写法会导致组件泄露：报这个错warning forceUpdate(...):Can only update a mounted or mounting component
    //this.timer = setTimeout(() => {
    //    InteractionManager.runAfterInteractions(() => {
    //      navigator.resetTo({
    //        component: AppMain,
    //        name: 'AppMain'
    //      });
    //    });
    //  }, 2500);

  }


  /**
   * 系统函数：在组件出现前 就是dom还没有渲染到html文档里面被调用
   */
  componentDidMount() {
    const {navigator} = this.props;
    this.timer=setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: AppMain,
          name: 'AppMain'
        });
      });
    }, 2500);
  }

  /**
   * 系统函数：在组件渲染完成 已经出现在dom文档里被调用
   */
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  /**
   * 系统函数：渲染界面，只有一张图片
   * @returns {XML}
     */
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