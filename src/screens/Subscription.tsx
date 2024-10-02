import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import { globalStyles } from '../utils/globalStyles'
import ImageView from '../components/ImageView'
import { PressableWrapperText, WrapperText } from '../components/WrapperText'
import TextInputView from '../components/TextInputView'
import ButtonView from '../components/ButtonView'
import HeroComponent from '../components/HeroComponent'
import Icon from 'react-native-vector-icons/FontAwesome5';
const Subscription = () => {
    return (

        <WrapperView
            accessibilityLabel='Login Screen'
            style={[globalStyles.container, globalStyles.alignItems,]}>
            <HeroComponent text={'Buy Subscription'} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, width: "100%", alignSelf: "center", }}
            >

                <WrapperView style={{ height: 15 }} />
                <WrapperView style={{flexDirection:"row"}}>
                    <SubscriptionCard />
                    <SubscriptionCard />
                    <SubscriptionCard />
                </WrapperView>
            


                {/* <WrapperView style={{ height: 25 }} />
                <WrapperView style={[{ width: "100%", }, globalStyles.alignSelf]}>
                    <ButtonView t={"Confirm"}
                        onPress={() => {
                            console.log("CallBack Function");
                            //   setscanned(!scanned)

                        }}
                    />
                </WrapperView> */}
                <WrapperView style={{ height: 20 }} />


            </ScrollView>

        </WrapperView>
    )
}

export default Subscription



const SubscriptionCard=()=>(
    <WrapperView
    style={{ width: 270, height: 370, backgroundColor: "#305581", alignSelf: "center", borderRadius: 20 }}

>
    <WrapperView
        style={{ padding: 20, }}
    >
        <WrapperText style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>Premium</WrapperText>
        <WrapperView style={{ height: 5 }} />
        <WrapperText style={{ fontSize: 36, color: "#fff", fontWeight: "bold" }}>$19.99

            <WrapperText
                style={{
                    fontSize: 20,
                }}
            >/year</WrapperText>
        </WrapperText>
        <WrapperView style={{ height: 15 }} />
        <WrapperView style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Icon name='check-circle' color={"#fff"} size={14} />
            <WrapperText style={{ fontSize: 14, color: "#fff" }}>24/7 Customer Support</WrapperText>

        </WrapperView>
        <WrapperView style={{ height: 5 }} />

        <WrapperView style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Icon name='check-circle' color={"#fff"} size={14} />
            <WrapperText style={{ fontSize: 14, color: "#fff" }}>24/7 Customer Support</WrapperText>

        </WrapperView>
    </WrapperView>
    <WrapperView
        style={{position:"absolute",bottom:30, width: "90%", alignSelf: "center", backgroundColor: "#528FC5", padding: 10, alignItems: "center", borderRadius: 10 }}
    >
        <WrapperText style={{ fontSize: 20, color: "#fff" }}>Buy now</WrapperText>
    </WrapperView>
</WrapperView>
)