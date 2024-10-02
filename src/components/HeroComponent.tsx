import { View, Text } from 'react-native'
import React from 'react'
import { WrapperText } from './WrapperText'
import ImageView from './ImageView'
import WrapperView from './WrapperView'
import { globalStyles } from '../utils/globalStyles'
interface HeroComponentProps{
    text:string
}
const HeroComponent:React.FC<HeroComponentProps> = ({text}) => {
  return (
    <>
    <WrapperView style={{ height: 10 }} />
    <WrapperView style={[{ width: "100%", alignItems: "center", height: 150, }, globalStyles.justifyContent]}>
        <ImageView style={{ width: 229, height: 150 }} imgPath={require('../assets/images/logo.png')} />
    </WrapperView>
    {/* <WrapperView style={{ height: 5 }} /> */}
    <WrapperText style={{ fontSize: 30, fontWeight: "bold", color: "#1E232C", textAlign: "center" }}>{text}</WrapperText>
    <WrapperView style={{ height: 5 }} />
    </>
  )
}

export default HeroComponent