// // In App.js in a new project
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AutNavigator from './src/navigation/AutNavigator';
// function App() {
//   return (
//     <NavigationContainer>
//      <AutNavigator />
//     </NavigationContainer>
//   );
// }

// export default App;
import { View, Text } from 'react-native'
import React from 'react'
import SignupScreen from './src/screens/SignupScreen'

const App = () => {
  return <SignupScreen />
  
}

export default App