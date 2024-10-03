import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen';
import QrCode from '../screens/QrCode';
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerTitleAlign:"center"
        }}
    
    >
      <Tab.Screen name="Chat" component={ChatScreen} 
      />
      <Tab.Screen name="My Qr Code" component={QrCode} />
    </Tab.Navigator>
  );
}


export default BottomTabs