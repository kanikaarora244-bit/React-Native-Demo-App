import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login/Login';
import MainTabs from './MainTabs';
import Onboarding from '../screens/Onboarding';
import BuyScreen from '../screens/BuyScreen';
import SwapScreen from '../screens/SwapScreen';
import SendScreen from '../screens/SendScreen';
import ReceiveScreen from '../screens/ReceiveScreen';

export type RootStackParamList = {
  Onboarding: any;
  EnterPassword: any;
  MainTabs: any;
  Buy: undefined;
  Swap: undefined;
  Send: undefined;
  Receive: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="EnterPassword" component={Login} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="Buy" component={BuyScreen} />
      <Stack.Screen name="Swap" component={SwapScreen} />
      <Stack.Screen name="Send" component={SendScreen} />
      <Stack.Screen name="Receive" component={ReceiveScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;