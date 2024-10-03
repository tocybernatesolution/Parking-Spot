import { View, Text } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import { globalStyles } from '../utils/globalStyles'
import HeroComponent from '../components/HeroComponent'
import LottieView from 'lottie-react-native'
import ButtonView from '../components/ButtonView'

const PaymentSuccess = () => {
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
<ButtonView t={'CHAT'} />
          </WrapperView>
    </WrapperView>
  )
}

export default PaymentSuccess