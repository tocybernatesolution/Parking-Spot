import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen';
import QrCode from '../screens/QrCode';
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerTitleAlign:"center"
        }}
    
    >
      <Tab.Screen name="Chat" component={ChatScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="chatbubbles" color={color} size={size} />
        ),
        headerTitle:"Parking Spots",
        tabBarShowLabel: false, 

      }}
      />
      <Tab.Screen name="My Qr Code" component={QrCode} 
         options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="qrcode" color={color} size={size} />
          ),
          headerTitle:"QR Code",
          tabBarShowLabel: false, 
        }}
      />
    </Tab.Navigator>
  );
}


export default BottomTabs