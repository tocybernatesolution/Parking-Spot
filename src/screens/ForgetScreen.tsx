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

const ForgetScreen = () => {
    let navigation=useNavigation<ScreenNavigationProp>()
    return (

        <WrapperView
            accessibilityLabel='Login Screen'
            style={[globalStyles.container, globalStyles.alignItems,]}>
             <HeroComponent text={'Forget Password?'} />

 
                <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, width: "90%", alignSelf: "center", }}
            >
                <WrapperView style={{ height: 10 }} />

          <WrapperText>Please enter your email address and we will send you a password reset code.</WrapperText>
                <WrapperView style={{ height: 20 }} />

                <WrapperView style={{ width: "100%" }}>
                    <TextInputView texttype={'Email'} label={'Email or Phone Number'} placeholder={'Enter your Email or Phone Number'} />

                </WrapperView>
        
           

                <WrapperView style={{ height: 25 }} />
                <WrapperView style={[{ width: "100%", }, globalStyles.alignSelf]}>
                    <ButtonView t={"Get Code"}
                        onPress={() => {
                            console.log("CallBack Function");
                            navigation.navigate('CreatePassword')
                            //   setscanned(!scanned)

                        }}
                    />
                </WrapperView>
                <WrapperView style={{ height: 20 }} />
        
                <WrapperView style={{ height: 20 }} />
      
        </ScrollView>

        </WrapperView>
    )
}

export default ForgetScreen