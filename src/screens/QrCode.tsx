import { View, Text } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import { globalStyles } from '../utils/globalStyles'
import QRCode from 'react-native-qrcode-svg';
import ButtonView from '../components/ButtonView';

const QrCode = () => {
    let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
    return (
        <WrapperView
            style={[globalStyles.container, globalStyles.alignItems]}
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
                style={{ width: "100%", alignSelf: "center", alignItems: "center", position: "absolute", bottom: 20 }}
            >

                <ButtonView t={'Log Out'} />
            </WrapperView>
        </WrapperView>
    )
}

export default QrCode