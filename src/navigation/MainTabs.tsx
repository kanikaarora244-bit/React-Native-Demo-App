import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WalletScreen from '../screens/WalletScreen';
import ActivityScreen from '../screens/ActivityScreen';
import BrowserScreen from '../screens/BrowserScreen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0B1220',
          borderTopColor: 'transparent',
        },
        tabBarActiveTintColor: '#7CE3B7',
        tabBarInactiveTintColor: '#98A0B3',
        tabBarShowLabel: true,
        tabBarIcon: ({ color, size }) => {
          let name: string = 'checkbox-blank-circle-outline';
          if (route.name === 'Wallet') {
            name = 'wallet-outline';
          } else if (route.name === 'Browser') {
            name = 'compass-outline';
          } else if (route.name === 'Activity') {
            name = 'chart-timeline-variant';
          }
          return <MCIcon name={name} size={size + 2} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Browser" component={BrowserScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;