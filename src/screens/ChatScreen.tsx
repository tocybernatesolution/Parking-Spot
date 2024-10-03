import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import { globalStyles } from '../utils/globalStyles'
import ImageView from '../components/ImageView'
import { WrapperText } from '../components/WrapperText'
import ChatCard from '../components/ChatCard'

const ChatScreen = () => {
    return (
        <WrapperView style={[globalStyles.container, globalStyles.alignItems]}>
            <WrapperView
                style={{ height: 20 }}
            />
            <WrapperView style={{ width: "90%", alignSelf: "center", alignItems: "flex-start" }}>
                <WrapperText style={{ fontSize: 18, color: "#000000", textAlign: "left" }}>Recent</WrapperText>

            </WrapperView>
            <WrapperView
                style={{ height: 20 }}
            />
            <ScrollView>
                <WrapperView style={{width:"93%",alignSelf:"center",gap:30}}>
                 {[1,2,4,5,6,7].map((e)=>(
                <ChatCard />

                 ))}
                </WrapperView>
            </ScrollView>
        </WrapperView>
    )
}

export default ChatScreen