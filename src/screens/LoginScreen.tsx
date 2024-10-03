import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import { globalStyles } from '../utils/globalStyles'
import ImageView from '../components/ImageView'
import { PressableWrapperText, WrapperText } from '../components/WrapperText'
import TextInputView from '../components/TextInputView'
import ButtonView from '../components/ButtonView'
import HeroComponent from '../components/HeroComponent'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../navigation/ScreenNavigationProp'

const LoginScreen = () => {
    let navigation = useNavigation<ScreenNavigationProp>()
    return (

        <WrapperView
            accessibilityLabel='Login Screen'
            style={[globalStyles.container, globalStyles.alignItems,]}>
            <HeroComponent text={'Welcome back!'} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, width: "90%", alignSelf: "center", }}
            >

                <WrapperView style={{ height: 15 }} />

                <WrapperView style={{ width: "100%" }}>
                    <TextInputView texttype={'Email or Phone Number'} label={'Email or Phone Number'} placeholder={'Enter your Email or Phone Number'} />

                </WrapperView>

                <WrapperView style={{ height: 15 }} />

                <WrapperView style={{ width: "100%" }}>
                    <TextInputView texttype={'Password'} label={'Password'} placeholder={'Enter Your Password'} />

                </WrapperView>
                <WrapperView style={{ height: 10 }} />
                <WrapperView
                    style={{ width: "100%", alignItems: "flex-end" }}

                >

                    <PressableWrapperText style={{ color: "#386290", fontWeight: "bold" }}

                        onPress={() => {
                            console.log("Login");
                            navigation.navigate('Forget')

                        }}
                    >
                        Forget password?
                    </PressableWrapperText>
                </WrapperView>

                <WrapperView style={{ height: 15 }} />
                <WrapperView style={[{ width: "100%", }, globalStyles.alignSelf]}>
                    <ButtonView t={"Login"}
                        onPress={() => {
                            console.log("CallBack Function");
                            //   setscanned(!scanned)
                            navigation.navigate('Subscrption')

                        }}
                    />
                </WrapperView>
                <WrapperView style={{ height: 20 }} />
                <WrapperView
                    style={[{ width: "90%", flexDirection: 'row', justifyContent: "space-between" }, globalStyles.alignItems, globalStyles.alignSelf,]}
                >
                    <WrapperView style={{ width: "43%", backgroundColor: "#CCCCCC", height: 1 }} />
                    <WrapperText>OR</WrapperText>
                    <WrapperView style={{ width: "43%", backgroundColor: "#CCCCCC", height: 1 }} />

                </WrapperView>
                <WrapperView style={{ height: 20 }} />
                <WrapperView style={[{ flexDirection: "row", gap: 5 }, globalStyles.alignItems, globalStyles.justifyContent]}>
                    <WrapperText style={{ color: "#CCCCCC" }}>
                        Don’t have an account?
                    </WrapperText>
                    <PressableWrapperText style={{ color: "#386290", fontWeight: "bold" }}

                        onPress={() => {
                            console.log("Login");
                            //   navigation.navigate('Login')
                            navigation.navigate('Splash')

                        }}
                    >
                        Signup
                    </PressableWrapperText>

                </WrapperView>
                <WrapperView style={{ height: 20 }} />
            </ScrollView>

        </WrapperView>
    )
}

export default LoginScreen