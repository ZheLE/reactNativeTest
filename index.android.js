/**这里是导包，导入我们要使用的控件*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
/**导入一个自己写的js文件，暂时没有用上*/
import Splash from './app/Splash.js';

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('reactNativeTest', () => Splash);
