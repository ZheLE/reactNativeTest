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
    Platform   ,
    AppRegistry,
    ViewPagerAndroid,
    TouchableOpacity,
    Image,
} from 'react-native';

/**导包*/
import { NaviGoBack } from '../utils/CommonUtils';

var _navigator;

class AppMain extends React.Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        //监听返回事件
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }

    /**
     * 点击返回上一个界面的函数
     * @returns {*}
     */
    goBack() {
        return NaviGoBack(_navigator);
    }

    /**
     * 处理点击事件的函数
     * @param page
     */
    onClick(page) {
        this.viewPager.setPage(page - 1);

    }
    /**
     * 处理点击事件的函数
     * @param page
     */
    onClickTitleBar(numer){
        this.viewPager.setPage(numer - 1);
    }


    render() {
        return (
        <View style={styles.flex1}>

            <View style={styles.headerMenu}>

                <View style={{flex:1,justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{this.onClickTitleBar(0)}}>
                        <View style={{justifyContent:'flex-start',flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../image/hotel_ic_home.png')}
                                   style={{width:20,height:26,marginLeft:8}}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize: 20, textAlign: 'center'}} >首页 </Text>
                </View>
                <View style={{justifyContent:'flex-end',alignItems:'center',flex:1,flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.onClickTitleBar(1)}}>
                        <Image source={require('../image/ic_action_search.png')}
                               style={{width:24,height:24,marginRight:8,alignItems:'center'}}/>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.line}></Text>

            <ViewPagerAndroid
                ref={viewPager => { this.viewPager = viewPager; }}
                style={styles.flex1}
                initialPage={0}
                pageMargin={0}>


                <View style={styles.page}>
                    <Text>Page 1</Text>
                </View>
                <View style={styles.page}>
                    <Text>Page 2</Text>
                </View>
                <View style={styles.page}>
                    <Text>Page 3</Text>
                </View>
            </ViewPagerAndroid>


            <Text style={styles.line}></Text>

            <View style={styles.footerMenu}>
                <TouchableOpacity onPress={() => this.onClick(1)}>
                    <Image source={require('../image/ic_menu_deal_off.png')} style={{width:33,height:33}} />
                    <Text style={styles.welcome} >首页 </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onClick(2)}>
                    <Image source={require('../image/ic_menu_poi_off.png')} style={{width:33,height:33}} />
                    <Text style={styles.welcome} >商城 </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onClick(3)} >
                    <Image source={require("../image/ic_menu_user_off.png")} style={{width:33,height:33,marginLeft:3}}/>
                    <Text style={styles.welcome} >个人中心 </Text>
                </TouchableOpacity>
            </View>

         </View>
        );
    }
}


var styles = {
    flex1: {
        flex: 1,
    },
    page: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        //borderWidth: 1,
        borderColor: 'black',
    },
    headerMenu: {
        flexDirection: 'row',

        backgroundColor: '#F2F2F2',
        height: 50,
        paddingHorizontal: 10,
    },
    footerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        height: 60,
        paddingHorizontal: 40,
    },
    img: {
        alignItems: 'center',
        justifyContent: 'center',
        width:90,
        height:90
    },
    welcome: {
        fontSize: 10,
        textAlign: 'center',
    },
    line: {
        backgroundColor: '#cdcdcd',
        height: 1,
    },
}

export default AppMain;
