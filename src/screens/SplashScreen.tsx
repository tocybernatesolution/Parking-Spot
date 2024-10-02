import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView';
import ImageView from '../components/ImageView';
import { globalStyles } from '../utils/globalStyles';
import { PressableWrapperText, WrapperText } from '../components/WrapperText';
import ButtonView from '../components/ButtonView';

const SplashScreen = () => {
  return (
    <>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle="dark-content" />
      <WrapperView
        accessibilityLabel="First Screen"
        style={[globalStyles.container, globalStyles.alignItems,]}>
        <View style={{ height: 20 }} />
        <WrapperView style={[{ height: 150, }, globalStyles.justifyContent]}>
          <ImageView style={{ width: 229, height: 123 }} />
        </WrapperView>
        <WrapperText style={{ fontSize: 30, color: "#1E232C", fontWeight: "bold" }}>Scan QR Code</WrapperText>
        <WrapperView
          style={{ height: 300 }}
        >

        </WrapperView>
        <WrapperView style={[{ width: "90%" }, globalStyles.alignSelf]}>
          <ButtonView t={"Scan QR"} 
          onPress={()=>{
            console.log("CallBack Function");
            
          }}
          />
        </WrapperView>
        <WrapperView style={{ height: 20 }} />
        <WrapperView
          style={[{ width: "80%", flexDirection: 'row', justifyContent: "space-between" }, globalStyles.alignItems, globalStyles.alignSelf,]}
        >
          <WrapperView style={{ width: "43%", backgroundColor: "#CCCCCC", height: 1 }} />
          <WrapperText>OR</WrapperText>
          <WrapperView style={{ width: "43%", backgroundColor: "#CCCCCC", height: 1 }} />

        </WrapperView>
        <WrapperView style={{ height: 20 }} />
        <WrapperView style={[{ flexDirection: "row", gap: 5 }, globalStyles.alignItems, globalStyles.justifyContent]}>
          <WrapperText style={{ color: "#CCCCCC" }}>
            Already Have An Account ?
          </WrapperText>
          <PressableWrapperText style={{ color: "#386290", fontWeight: "bold" }}
          
          onPress={()=>{
            console.log("Login");
            
          }}
          >
            Login
          </PressableWrapperText>
        </WrapperView>
      </WrapperView >
    </>
  )
}

export default SplashScreen 