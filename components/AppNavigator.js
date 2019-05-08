import React , {Component} from 'react';
import {createStackNavigator,createAppContainer,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';
import {IconButton,Colors} from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons";
//import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Profile from './Profile';
import Initialization from './Initialization';
import Login from './Login';
import Signin from './Sigin';


const HomeStack = createStackNavigator({
    Home : {screen : Home},
},
{
    headerMode: 'none',
    navigationOptions : ({ navigation}) =>({
        headerVisible: false,
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" size={25}  />
          ),
    })
}
)
const ProfileStack = createStackNavigator({
    Profile : {screen : Profile},
},
{
    headerMode: 'none',
    navigationOptions : ({ navigation}) =>({
        headerVisible: false,
        tabBarLabel:"Profile",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-contact" size={25}  />
          ),
    })
}
) 

const FeedTab = createBottomTabNavigator({
    Home : HomeStack,
    Profile : ProfileStack,
})

const AuthTab = createBottomTabNavigator({
    Signin : Signin,
    Login : Login
})


const AppNavigator = createAppContainer(createSwitchNavigator({
    Initialization : Initialization,
    FeedTab : FeedTab,
    AuthTab : AuthTab
}))

export default AppNavigator;