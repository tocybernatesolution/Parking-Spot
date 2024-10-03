import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { SubscriptionCard } from './SubscriptionCard'
import WrapperView from './WrapperView'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../navigation/ScreenNavigationProp'
type Props={
    index:number
    scrollX:SharedValue<number>
}
const {width}=Dimensions.get('screen')

const SliderItem = ({index,scrollX}:Props) => {
    
    const rnAnimatedStyle=useAnimatedStyle(()=>{
      return{
        transform:[
            {
                translateX:interpolate(
                    scrollX.value,
                    [(index-1)*width,index*width,(index+1)*width],
                    [-width*0.28,0,width*0.28],
                    Extrapolation.CLAMP
                )
            },
            {
                scale:interpolate(
                    scrollX.value,
                    [(index-1)*width,index*width,(index+1)*width],
                    [0.9,1,0.9],
                    Extrapolation.CLAMP

                )
            }
        ]
      }
    });
  return (
    <Animated.View style={[rnAnimatedStyle,{width:width,justifyContent:"center",alignItems:"center",},]}>
     <SubscriptionCard />

    </Animated.View>
  )
}

export default SliderItem