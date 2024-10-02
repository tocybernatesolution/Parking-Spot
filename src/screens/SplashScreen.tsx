import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import WrapperView from '../components/WrapperView';
import ImageView from '../components/ImageView';
import { globalStyles } from '../utils/globalStyles';
import { PressableWrapperText, WrapperText } from '../components/WrapperText';
import ButtonView from '../components/ButtonView';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '../navigation/ScreenNavigationProp';

const SplashScreen = () => {
  const [scanned, setscanned] = useState(false)
  let navigation=useNavigation<ScreenNavigationProp>();
  const onSuccess = (e: any) => {
    console.log(e);
    navigation.navigate('Signup')
    // navigation.navigate("Signup")

  };
  return (
    <>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle="dark-content" />
      <WrapperView
        accessibilityLabel="First Screen"
        style={[globalStyles.container, globalStyles.alignItems,]}>
        <WrapperView style={{ height: 20 }} />
        <WrapperView style={[{ height: 150, }, globalStyles.justifyContent]}>
          <ImageView style={{ width: 229, height: 123 }} imgPath={require('../assets/images/logo.png')} />
        </WrapperView>
        <WrapperText style={{ fontSize: 30, color: "#1E232C", fontWeight: "bold" }}>Scan QR Code</WrapperText>
        <WrapperView style={{ height: 20 }} />

        <WrapperView
          style={{ width: "90%", alignSelf: "center", height: 300, overflow: "hidden", borderRadius: 20 }}
        >
          {scanned && (
            <QRCodeScanner
              onRead={onSuccess}
              flashMode={RNCamera.Constants.FlashMode.torch}
            />

          )

          }
        </WrapperView>
        <WrapperView style={{ height: 20 }} />

        <WrapperView style={[{ width: "90%" }, globalStyles.alignSelf]}>
          <ButtonView t={"Scan QR"}
            onPress={() => {
              // console.log("CallBack Function");
              setscanned(!scanned)

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

            onPress={() => {
              console.log("Login");
              navigation.navigate('Login')

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