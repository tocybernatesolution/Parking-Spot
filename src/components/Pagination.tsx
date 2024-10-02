import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import WrapperView from './WrapperView';
type Props = {
    items: any
    paginationIndex: number;
    scrollX: SharedValue<number>

}
const {width}=Dimensions.get('screen')

const Pagination = ({ items, paginationIndex, scrollX }: Props) => {
    return (
        <WrapperView style={{width:"90%",alignSelf:"center",alignItems:"center",flexDirection:"row",justifyContent:"center",gap:5}}>
            {items.map((_: any, index:any) =>{
                const pgAnimationStyle=useAnimatedStyle(()=>{
                    const dotwidth=interpolate(
                        scrollX.value,
                        [(index-1)*width,index*width,(index+1)*width],
                        [10,20,10],
                        Extrapolation.CLAMP
                        
                    )
                    return{
                        width:dotwidth
                    }
                })

                return(
                <Animated.View
                 key={index}
                    style={[pgAnimationStyle,{
                        width: 10,
                        height: 10,
                        borderRadius:50,
                        backgroundColor:paginationIndex==index?"#305581": "#528FC5"

                    }]}
                />
            )})

            }
        </WrapperView>
    )
}

export default Pagination