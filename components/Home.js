import React , {Component} from 'react';
import {Text , View,StyleSheet,FlatList,ImageBackground} from 'react-native';
import {Title,Card,Paragraph,Chip,Button,Surface,Image,Searchbar} from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons";
import Logo from '../assets/icon.png';

export default class Home extends Component{
    static navigationOptions = {
        title : 'Home',
        headerStyle : {
            backgroundColor : "#01a078",
        },
        headerTintColor : "white"
    }

    constructor(){
        super();
        this.state = {
            search : '',
            books : [
                {name : 'Miracle Morning',id : "0"},
                {name : 'Le Zahir',id : "1"},
                {name : 'Lui et moi',id : "2"},
                {name : 'Deep Words',id : "3"},
                {name : 'Terrible Feeling',id : "4"},
                {name : 'Depression and Power',id : "5"},
                {name : 'Power is Power',id : "6"},
                {name : 'The long night',id : "7"},
            ]
        }
    }


    render(){
        return(
            <View style={styles.container}> 
                <View style={styles.header}>
                    <ImageBackground style={styles.background} source={{ uri: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={{width: '100%', height: '100%'}}>
                        <View style={styles.titleContainer}>
                            <Title style={styles.title}>Feed</Title>
                        </View>
                        
                    </ImageBackground>
                </View>
                <View style={styles.med}>
                    <Searchbar
                      style = {styles.searchbar}
                      placeholder="Search Book"
                      value = {this.state.search}
                      onChangeText = {(val) =>{this.setState({search : val})}}
                    />
                </View>
                <View style = {styles.body}>
                    <FlatList
                        data={this.state.books}
                        renderItem={({item}) => <Button style={styles.button} icon="book" mode="outlined" onPress={() => console.log('Pressed')}>{item.name}</Button>}
                        keyExtractor={item => item.id}
                    />
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
    card :{
        width : 320
    },
    cover : {
        height:50,
    },
    header : {
        flex : 1,
        backgroundColor : "blue",
        width : 360,
        alignItems: 'center',
    },
    body : {
        flex : 6,
        width : 360,
        alignItems: 'center',
    },
    button :{
        width : 320,
        padding : 7,
        margin : 8
        
    },
    background : {
        alignItems: 'center',
    },
    title : {
        color : "white",
        alignItems: 'center',
        fontSize :24
    },
    titleContainer :{
        alignItems: 'center',
        justifyContent: 'center',
        flex : 1
    },
    med : {
        flex : 1,
    },
    searchbar : {
        width : 330,
        margin : 5,
        height : 45
    }
  });