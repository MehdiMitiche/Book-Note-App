import React , {Component} from 'react';
import {Text , View,StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {TextInput,Title,Button} from 'react-native-paper';

export default class Signin extends Component{
    static navigationOptions = {
        title : 'Signin',
        tabBarLabel:"Signin",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add-circle-outline" size={25}  />
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
            email : '',
            password : '',
            passwordConf :''
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
                <Title>SignIn</Title>
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
                  label = "Email"
                  underlineColor ="black"
                  onChangeText = {(val) => {
                      this.onChange('email' , val)
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

                <TextInput
                  style = {styles.input}
                  value = {this.state.password}
                  label = "Password Confirmation"
                  underlineColor ="black"
                  onChangeText = {(val) => {
                      this.onChange('passwordConf' , val)
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
        margin : 10,
        backgroundColor :"white"
    }
  })