import { View, Text, ScrollView, FlatList ,ViewToken} from 'react-native'
import React, { useRef, useState } from 'react'
import WrapperView from '../components/WrapperView'
import { globalStyles } from '../utils/globalStyles'
import HeroComponent from '../components/HeroComponent'
import SliderItem from '../components/SliderItem'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import Pagination from '../components/Pagination'
import ButtonView from '../components/ButtonView'
const Subscription = () => {
    let subscription=[1, 3, 5,2];
    let [paginationIndex,setpaginationIndex]=useState(0)
    let scrollX = useSharedValue(0)
    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        }
    })
    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };
    const onViewableItemsChanged=({viewableItems}:{viewableItems:ViewToken[]})=>{
        if(viewableItems[0].index!==undefined && viewableItems[0].index!==null){
            setpaginationIndex(viewableItems[0].index)
        }
    }
    const viewabilityConfigCallbackPairs=useRef([{viewabilityConfig,onViewableItemsChanged}])
    return (

        <WrapperView
            accessibilityLabel='Login Screen'
            style={[globalStyles.container, globalStyles.alignItems,]}>
            <HeroComponent text={'Buy Subscription'} />
            <WrapperView
                style={{ height: 10 }}
            />
            <WrapperView
                style={{ width: "100%", }}
            >


                <Animated.FlatList
                    removeClippedSubviews={false}
                    data={subscription}
                    renderItem={({ item, index }) => (<SliderItem scrollX={scrollX} index={index} />)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    pagingEnabled
                    contentContainerStyle={{
                        alignItems: "center"
                    }}
                    decelerationRate="fast"
                    onScroll={onScrollHandler}
                    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
            


                />
        <WrapperView
                style={{ height: 20 }}
            />

            <Pagination paginationIndex={paginationIndex} scrollX={scrollX} items={subscription} />
            </WrapperView>

            {/* <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, width: "100%", alignSelf: "center", }}
            >

                <WrapperView style={{ height: 15 }} />
                {/* <WrapperView style={{flexDirection:"row"}}>
                    <SubscriptionCard />
                    <SubscriptionCard />
                    <SubscriptionCard />
                </WrapperView> */}



             <WrapperView style={{ height: 25 }} />
                <WrapperView style={[{ width: "90%",height:60 }, globalStyles.alignSelf]}>
                    <ButtonView t={"LOG OUT"}
                        onPress={() => {
                            console.log("CallBack Function");

                        }}
                    />
                </WrapperView> 
            <WrapperView style={{ height: 20 }} />



        </WrapperView>
    )
}

export default Subscription


