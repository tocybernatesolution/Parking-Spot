import { View, Text } from 'react-native'
import React from 'react'
import WrapperView from './WrapperView'
import ImageView from './ImageView'
import { WrapperText } from './WrapperText'

const ChatCard = () => {
  return (
    <WrapperView style={{width:"100%",alignSelf:"center",flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
    <WrapperView style={{flexDirection:"row",alignItems:'center',gap:5}}>
       <ImageView 
       style={{width:40,height:40}}
       imgPath={require('../assets/images/chat-user.png')} />
       <WrapperView>
           <WrapperText style={{fontWeight:"bold",color:"#000"}}>Unknown</WrapperText>
           <WrapperView 
           style={{height:2}}
           />
           <WrapperText style={{fontSize:13}}>please part on right </WrapperText>
           </WrapperView>
    </WrapperView>
    <WrapperView style={{alignItems:"flex-end"}}>
           <WrapperText style={{fontWeight:"500",fontSize:12,color:"#282828"}}>18.31</WrapperText>
           <WrapperView 
           style={{height:2}}
           />
           {/* <WrapperText style={{fontSize:13}}>please part on right </WrapperText> */}
           <WrapperView 
           style={{width:22,height:22,backgroundColor:"#A4BFD9",borderRadius:50,alignItems:"center",justifyContent:"center"}}
           >
<WrapperText style={{color:"#fff"}}>5</WrapperText>
           </WrapperView>
           </WrapperView>
  </WrapperView>
  )
}

export default ChatCard