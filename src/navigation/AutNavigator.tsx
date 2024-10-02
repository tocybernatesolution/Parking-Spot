import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
import SignupScreen from '../screens/SignupScreen'
import LoginScreen from '../screens/LoginScreen'
import ForgetScreen from '../screens/ForgetScreen'
import CreatePasswordScreen from '../screens/CreatePassword'
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
        </Stack.Navigator>
    )
}

export default AutNavigator