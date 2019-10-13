import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button ,TextInput} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {  
    createSwitchNavigator,  
    createAppContainer,  
} from 'react-navigation';  

 



export default class App extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  
  
class WelcomeScreen extends Component {  
    static navigationOptions = {  
         title: 'Welcome',  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>WelcomeScreen</Text>  
                <Button  
                    title="Go to DashboardScreen"  
                    onPress={() => this.props.navigation.navigate('Dashboard')}  
                />  
            </View>  
        );  
    }  
}  
  
class DashboardScreen extends Component {  
    static navigationOptions = {  
         title: 'Dashboard',  
    };  
  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>DashboardScreen</Text>  
            </View>  
        );  
    }  
}  
const DashboardStackNavigator = createStackNavigator(  
    {  
        DashboardNavigator: DashboardScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            )  
        };  
        }  
    }  
);  

class ProfileScreen extends Component {  
    static navigationOptions = {  
         title: 'Profile',  
    };  
    state = {
        email: '',
        password: ''
     }
     handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
     }
  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>ProfileScreen</Text>  
                <Button  
                    title="Go to DashboardScreen"  
                    onPress={() => this.props.navigation.navigate('Dashboard')}  
                /> 
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

            </View>  
        );  
    }  
}  
const ProfileStackNavigator = createStackNavigator(  
    {  
        ProfileNavigator: ProfileScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            )  
        };  
        }  
    }  
); 
  
const WelcomeStackNavigator = createStackNavigator(  
    {  
        WelcomeNavigator: WelcomeScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  
const AppDrawerNavigator = createDrawerNavigator({  
    Dashboard: {  
        screen: DashboardStackNavigator  
    },  
    Welcome: {  
        screen: WelcomeStackNavigator  
    },  
    Profile :{
        screen : ProfileStackNavigator
    },
});  
  
const AppSwitchNavigator = createSwitchNavigator({  
    Dashboard: { screen: AppDrawerNavigator },  
    Profile : {screen: ProfileScreen},
    Welcome: { screen: WelcomeScreen },  
  
});  
  
const AppContainer = createAppContainer(AppSwitchNavigator);  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    }  
});  