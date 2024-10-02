import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
const Stack = createNativeStackNavigator()
const AutNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Splash' component={SplashScreen} />
        </Stack.Navigator>
    )
}

export default AutNavigator