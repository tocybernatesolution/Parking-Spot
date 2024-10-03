import { View, Text } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import { globalStyles } from '../utils/globalStyles'
import HeroComponent from '../components/HeroComponent'
import LottieView from 'lottie-react-native'
import ButtonView from '../components/ButtonView'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../navigation/ScreenNavigationProp'

const PaymentSuccess = () => {
  let navigation=useNavigation<ScreenNavigationProp>()
  return (
    <WrapperView
    style={[globalStyles.container,globalStyles.alignItems]}
    >
            <HeroComponent text={'Status Payment'} />
            <WrapperView
            style={{height:10}}
            
            />
            <LottieView 
            source={require('../assets/animation/success.json')}
            autoPlay
            loop
            style={{width:200,height:300}}
            
            />
            <WrapperView  
            style={{height:10}}
            
            />
          <WrapperView
          style={{width:"90%",alignSelf:"center"}}
          
          >
<ButtonView t={'CHAT'}
onPress={()=>{
  navigation.navigate('Tabs')
}}
/>
          </WrapperView>
    </WrapperView>
  )
}

export default PaymentSuccess