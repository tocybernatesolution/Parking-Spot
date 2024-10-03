import { Pressable } from "react-native";
import { WrapperText } from "./WrapperText"
import WrapperView from "./WrapperView"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../navigation/ScreenNavigationProp";

export const SubscriptionCard=()=>{
  let navigation=useNavigation<ScreenNavigationProp>()

    return(
    <WrapperView
    style={{ width: 250, height: 350, backgroundColor: "#305581", alignSelf: "center", borderRadius: 20 }}

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
    <Pressable
        style={{position:"absolute",bottom:30, width: "90%", alignSelf: "center", backgroundColor: "#528FC5", padding: 10, alignItems: "center", borderRadius: 10 }}

    onPress={()=>{
        navigation.navigate('CheckOut')
    }}
    
    >

    <WrapperView
        >
        <WrapperText style={{ fontSize: 20, color: "#fff" }}>Buy now</WrapperText>
    </WrapperView>
        </Pressable>
</WrapperView>
)}