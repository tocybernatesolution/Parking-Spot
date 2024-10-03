import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
import SignupScreen from '../screens/SignupScreen'
import LoginScreen from '../screens/LoginScreen'
import ForgetScreen from '../screens/ForgetScreen'
import CreatePasswordScreen from '../screens/CreatePassword'
import Subscription from '../screens/Subscription'
import CheckOutScreen from '../screens/CheckOutScreen'
import PaymentSuccess from '../screens/PaymentSuccess'
import BottomTabs from './BottomTabs'
const Stack = createNativeStackNavigator()
const AutNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />  
            <Stack.Screen name='Forget' component={ForgetScreen} />  
            <Stack.Screen name='CreatePassword' component={CreatePasswordScreen} />  
            {/* New Stack= */}
            <Stack.Screen name='Subscrption' component={Subscription} />  
            <Stack.Screen name='CheckOut' component={CheckOutScreen} />  
            <Stack.Screen name='Success' component={PaymentSuccess} />  
            <Stack.Screen name='Tabs' component={BottomTabs} />  
            {/* <Stack.Screen name='Subscrption' component={Subscription} />   */}
        </Stack.Navigator>
    )
}

export default AutNavigator