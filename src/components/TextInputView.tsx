import { View, Text } from 'react-native'
import React from 'react'
import WrapperView from './WrapperView'
import ImageView from './ImageView'
import { WrapperText } from './WrapperText'
import { TextInput } from 'react-native-paper'
interface TextInputViewProps{
    texttype:string,
    label:string,
    placeholder:string
}
const TextInputView:React.FC<TextInputViewProps> = ({texttype,label,placeholder}) => {
    return (
        <WrapperView style={{ gap: 12 }}>
            <WrapperView style={{ width: "98%", alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 5 }}>
                <ImageView style={{ width: 16, height: 16 }} imgPath={require('../assets/images/User.png')} />
                <WrapperText style={{ color: "#000000" }}>{texttype}</WrapperText>
            </WrapperView>
            <TextInput
                style={{ width: "100%", height: 55, backgroundColor: "#F7F8F9", borderColor: "#E8ECF4" }}

                label={label}
                mode="outlined"
                placeholder={placeholder}
                onChangeText={text => console.log(text)}

                theme={{
                    colors: {
                        primary: '#FF0000',
                        outline: '#E8ECF4',
                    },
                    roundness: 4
                }}
            />
        </WrapperView>
    )
}

export default TextInputView