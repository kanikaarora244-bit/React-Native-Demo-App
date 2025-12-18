import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WalletScreen from '../screens/WalletScreen';
import ActivityScreen from '../screens/ActivityScreen';
import BrowserScreen from '../screens/BrowserScreen';
import { Text } from 'react-native';


const Tab= createBottomTabNavigator();
const MainTabs=()=>{
    return(
<Tab.Navigator
screenOptions={{
    headerShown:false,
    tabBarStyle:{
        backgroundColor:'#0B1220',
        borderTopColor:'transparent',
        height:70,
        position:'absolute',
        marginHorizontal:16,
        bottom:16,
        borderRadius:14,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{width:0,height:6},
        elevation:8
    },
    tabBarActiveTintColor: '#7CE3B7',
    tabBarInactiveTintColor: '#98A0B3',
}}
>
    <Tab.Screen name='Wallet' component={WalletScreen} options={{
        tabBarIcon: ({color}) => <Text style={{color}}>W</Text>
    }}/>
    <Tab.Screen name='Activity' component={ActivityScreen} options={{
        tabBarIcon: ({color}) => <Text style={{color}}>A</Text>
    }}/>
    <Tab.Screen name='Browser' component={BrowserScreen} options={{
        tabBarIcon: ({color}) => <Text style={{color}}>B</Text>
    }}/>
</Tab.Navigator>
    )
}

export default MainTabs;