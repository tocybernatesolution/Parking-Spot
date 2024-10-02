import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import { globalStyles } from '../utils/globalStyles'
import ImageView from '../components/ImageView'
import { PressableWrapperText, WrapperText } from '../components/WrapperText'
import TextInputView from '../components/TextInputView'
import ButtonView from '../components/ButtonView'
import HeroComponent from '../components/HeroComponent'

const CreatePasswordScreen = () => {
    return (

        <WrapperView
            accessibilityLabel='Login Screen'
            style={[globalStyles.container, globalStyles.alignItems,]}>
             <HeroComponent text={'Create Passwrod'} />
 
                <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, width: "90%", alignSelf: "center", }}
            >
        
                <WrapperView style={{ height: 15 }} />

                <WrapperView style={{ width: "100%" }}>
                    <TextInputView texttype={'Password'} label={'Password'} placeholder={'Enter your Password'} />

                </WrapperView>
        
                <WrapperView style={{ height: 15 }} />

                <WrapperView style={{ width: "100%" }}>
                    <TextInputView texttype={'Confirm Password'} label={'Confirm Password'} placeholder={'Enter Your Confirm Password'} />

                </WrapperView>

                <WrapperView style={{ height: 25 }} />
                <WrapperView style={[{ width: "100%", }, globalStyles.alignSelf]}>
                    <ButtonView t={"Confirm"}
                        onPress={() => {
                            console.log("CallBack Function");
                            //   setscanned(!scanned)

                        }}
                    />
                </WrapperView>
                <WrapperView style={{ height: 20 }} />
             
                <WrapperView style={{ height: 20 }} />
       
        <WrapperView style={{ height: 20 }} />
        </ScrollView>

        </WrapperView>
    )
}

export default CreatePasswordScreen