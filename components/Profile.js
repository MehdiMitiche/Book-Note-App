import React , {Component} from 'react';
import {Text , View,StyleSheet,Button} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class Profile extends Component{
    static navigationOptions = {
        title : 'Profile',
        headerStyle : {
            backgroundColor : "#01a078",
        },
        headerTintColor : "white"
    }
    render(){
        return(
            <View style={styles.container}> 
                <View style={styles.header}>
                    <Text>Profile</Text>
                </View>
                <View style={styles.profile}>
                    <View style={styles.imageContainer}>
                        <Text>Image Profile</Text>
                    </View>
                    <View style={styles.InfoContainer}>
                        <View style = {styles.bookN}>
                            <Text>A</Text>
                        </View>
                        <View style = {styles.noteN}>
                            <Text>A</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text>C</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header : {
        flex : 1,
        backgroundColor :"red",
        width : 360,
        justifyContent: 'center',
    },
    profile : {
        flex : 2,
        backgroundColor : "green",
        width : 360,
        alignItems: 'center',
    },
    body : {
        flex : 8,
        width : 360,
        alignItems: 'center',
    },
    imageContainer : {
        flex : 1,
        width : 360,
        alignItems: 'center',
        justifyContent: 'center',
    },
    InfoContainer : {
        flex : 1,
        flexDirection: 'row',
        width : 360,
        backgroundColor : "blue",
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookN : {
        flex : 1,
        alignItems: 'center',
    },
    noteN : {
        flex : 1,
        alignItems: 'center',
    }
  });