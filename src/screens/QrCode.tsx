import { View, Text } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import { globalStyles } from '../utils/globalStyles'
import QRCode from 'react-native-qrcode-svg';
import ButtonView from '../components/ButtonView';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '../navigation/ScreenNavigationProp';

const QrCode = () => {
    let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
    let navigation=useNavigation<ScreenNavigationProp>()
    return (
        <WrapperView
            style={[globalStyles.container, globalStyles.alignItems,{width:"100%",height:"100%",}]}
        >
            <WrapperView
                style={{ height: 50 }}
            />
            <QRCode

                value="Just some string value"
                logo={{ uri: base64Logo }}
                size={200}
                logoBackgroundColor='transparent'
            />
            
            <WrapperView
            style={{width:"90%",alignSelf:"center",height:100,position:"absolute",bottom:10}}
            
            >
                <ButtonView t={'Log Out'}
                onPress={()=>{
                    navigation.navigate('Splash')
                }}
                
                />
                </WrapperView>
        </WrapperView>
    )
}

export default QrCode