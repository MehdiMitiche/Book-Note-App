import React , {Component} from 'react';
import {Text , View,StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {TextInput,Title,Button} from 'react-native-paper';

export default class Login extends Component{
    static navigationOptions = {
        title : 'Login',
        tabBarLabel:"Login",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-log-in" size={25}  />
          ),
        headerStyle : {
            backgroundColor : "#ff3535",
        },
        headerTintColor : "white"
    }

    constructor(){
        super();
        this.state = {
            username : '',
            password : ''
        }
    }

    onChange = (key , value) =>{
        this.setState({
            [key] : value
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Title>Login</Title> 
                <TextInput
                  style = {styles.input}
                  value = {this.state.username}
                  label = "Username"
                  underlineColor ="black" 
                  onChangeText = {(val) => {
                      this.onChange('username' , val)
                  }}
                />
                <TextInput
                  style = {styles.input}
                  value = {this.state.password}
                  label = "Password"
                  underlineColor ="black"
                  onChangeText = {(val) => {
                      this.onChange('password' , val)
                  }}
                />
                <Button mode="outlined">Submit</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input :{
        height : 55 , 
        width : 300,
        margin : 14,
        backgroundColor :"white"
    }
  })