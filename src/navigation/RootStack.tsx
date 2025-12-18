import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {React} from 'react' ;
import Login from '../screens/Login/Login';
import MainTabs from './MainTabs';
import Onboarding from '../screens/Onboarding';
 export type RootStackParamList={
    Onboarding:any;
    EnterPassword:any;
    MainTabs:any;
 };

const Stack=createNativeStackNavigator<RootStackParamList>();
 
const RootStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Onboarding'>
            <Stack.Screen name='Onboarding' component={Onboarding}/>
            <Stack.Screen name='EnterPassword' component={Login}/>
            <Stack.Screen name='MainTabs' component={MainTabs}/>
        </Stack.Navigator>
    )
}

export default RootStack;