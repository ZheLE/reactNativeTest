/**
 * Created by Administrator on 2016/9/11 0011.
 */
'use strict';
/**导包*/
import React from 'react';
import {
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,
    View,
    Text,
    Platform
} from 'react-native';
/**导包*/
import Splash from '../Splash';
import { NaviGoBack } from '../utils/CommonUtils';
var _navigator;

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        //函数的定义并初始化
        this.renderScene = this.renderScene.bind(this);
        this.goBack = this.goBack.bind(this);
        //监听返回事件
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }

    //监听手机点击返回按钮
    goBack() {
        return NaviGoBack(_navigator);
    }

    //渲染场景的函数：这里接收系统传来的两个参数，一个是路由对象，一个是导航器对象
    renderScene(route, navigator) {
        let Component = route.component;//获取到initialRoute路由中设计的Splash组件
        _navigator = navigator;//导航器对象，在goBack（）函数中需要用到
        return (
            <Component navigator={navigator}  route={route} />//返回一个渲染界面的Splash组件
        );
    }

    //界面跳转的动画：这里接收系统传来的两个参数，一个是路由对象，一个是导航器对象
    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }


    render() {
        return (
            <Navigator
                ref='navigator'
                style={styles.navigator}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                initialRoute={{
                component: Splash,
                name: 'Splash'
          }}
            />
        );
    }
}

let styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

export default Welcome;
