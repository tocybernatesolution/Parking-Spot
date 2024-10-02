import { View, ViewProps } from 'react-native'
import React from 'react'

const WrapperView: React.FC<ViewProps> = ({ children, ...props }) => {
    return (
        <View  {...props}>
            {children}
        </View>
    )
}

export default WrapperView