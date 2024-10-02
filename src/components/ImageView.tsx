import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageView = ({...props}) => {
  return (
   <Image 
   {...props}
   source={require('../assets/images/logo.png')}
   
   />
  )
}

export default ImageView