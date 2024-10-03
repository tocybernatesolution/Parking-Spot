import React from 'react'
import { TextInput } from 'react-native-paper'
type Props={
    label:string;
    placeholder:string;

}
const SimpleTextInput = ({label,placeholder}:Props) => {
  return (
  <TextInput
    style={{ width: "100%", height: 55, backgroundColor: "#F7F8F9", borderColor: "#E8ECF4" }}
    
    label={label}
    mode="outlined"
    placeholder={placeholder}
    onChangeText={text => console.log(text)}
    
    theme={{
      colors: {
        primary: '#FF0000',
        outline: '#E8ECF4',
      },
      roundness: 10
    }}
    />
)
}

export default SimpleTextInput