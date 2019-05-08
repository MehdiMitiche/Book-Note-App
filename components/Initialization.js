import React , {Component} from 'react';
import {Text , View,StyleSheet,Button} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

export default class Initialiation extends Component{
    static navigationOptions = {
        title : 'Book Note'
    }

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('FeedTab')
        },500)
    }

    render(){
        return(
            <View style={styles.container}> 
                <Text>Loading</Text>
                <ActivityIndicator animating={true} />
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
  });