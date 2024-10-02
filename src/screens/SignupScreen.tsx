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

const SignupScreen = () => {
    let navigation=useNavigation<ScreenNavigationProp>()
    return (

        <WrapperView
            accessibilityLabel='Signup Screen'
            style={[globalStyles.container, globalStyles.alignItems,]}>
             <HeroComponent text={'Sign Up'} />
 
                <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, width: "90%", alignSelf: "center", }}
            >
                <WrapperView style={{ height: 15 }} />
                <WrapperView style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <WrapperView style={{ width: "48%" }}>
                        <TextInputView texttype={'First Name'} label={'First Name'} placeholder={'Enter Name'} />

                    </WrapperView>
                    <WrapperView style={{ width: "48%" }}>
                        <TextInputView texttype={'Last Name'} label={'Last Name'} placeholder={'Enter Name'} />

                    </WrapperView>

                </WrapperView>
                <WrapperView style={{ height: 15 }} />

                <WrapperView style={{ width: "100%" }}>
                    <TextInputView texttype={'Email'} label={'Email'} placeholder={'info@gmail.com'} />

                </WrapperView>
                <WrapperView style={{ height: 15 }} />

                <WrapperView style={{ width: "100%" }}>
                    <TextInputView texttype={'Vehicle Name'} label={'Vehicle Name'} placeholder={'Enter Vehicle Name'} />

                </WrapperView>
                <WrapperView style={{ height: 15 }} />

                <WrapperView style={{ width: "100%" }}>
                    <TextInputView texttype={'Vehicle Number'} label={'Vehicle Number'} placeholder={'Enter Vehicle Number'} />

                </WrapperView>
                <WrapperView style={{ height: 15 }} />

                <WrapperView style={{ width: "100%" }}>
                    <TextInputView texttype={'Password'} label={'Password'} placeholder={'Enter Your Password'} />

                </WrapperView>

                <WrapperView style={{ height: 25 }} />
                <WrapperView style={[{ width: "100%", }, globalStyles.alignSelf]}>
                    <ButtonView t={"Register"}
                        onPress={() => {
                            console.log("CallBack Function");
                            //   setscanned(!scanned)

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
        <WrapperView style={{ height: 20 }} />
        </ScrollView>

        </WrapperView>
    )
}

export default SignupScreen