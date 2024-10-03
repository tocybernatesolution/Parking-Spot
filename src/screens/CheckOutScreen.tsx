import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import { globalStyles } from '../utils/globalStyles'
import AppBar from '../components/AppBar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { WrapperText } from '../components/WrapperText'
import ImageView from '../components/ImageView'
import { Checkbox, TextInput } from 'react-native-paper'
import SimpleTextInput from '../components/SimpleTextInput'
import ButtonView from '../components/ButtonView'

const CheckOutScreen = () => {
  return (

    <WrapperView
      style={[globalStyles.container]}
    >
      <ScrollView>

      <WrapperView style={{ height: 40 }} />
      <WrapperText style={{ fontSize: 48, fontWeight: "bold", textAlign: "center", color: "black" }}>$19.99</WrapperText>
      <WrapperView style={{ height: 40 }} />
      <WrapperView style={[{ width: "90%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, globalStyles.alignSelf]}>
        <WrapperView style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <WrapperView
            style={{ width: 20, height: 20, borderRadius: 50, borderWidth: 5, borderColor: "#2280EF" }}
          />
          <WrapperText style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Credit/Debit Card</WrapperText>
        </WrapperView>
        <WrapperView style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <ImageView style={{ width: 42, height: 14 }} imgPath={require('../assets/images/visa-logo.png')} />
          <ImageView style={{ width: 28, height: 17 }} imgPath={require('../assets/images/master.png')} />
        </WrapperView>


      </WrapperView>
      <WrapperView style={{ height: 20 }} />
      <WrapperView
        style={{ width: '90%', alignSelf: "center", backgroundColor: "#F3F3F3", padding: 10, borderRadius: 10 }}
      >
        <WrapperText>Pay securely with your Bank Account using Visa or Mastercard</WrapperText>
      </WrapperView>
      <WrapperView style={{ height: 15 }} />

      <WrapperView
        style={{ width: "90%", alignSelf: "center" }}
      >
        <SimpleTextInput label={'Label'} placeholder={'XXXX XXXX XXXX XXXX'} />
      </WrapperView>
      <WrapperView style={{ height: 15 }} />

      <WrapperView
        style={{ width: "90%", alignSelf: "center" }}
      >
        <SimpleTextInput label={'Name on Card'} placeholder={'Name on Card'} />
      </WrapperView>
      <WrapperView style={{ height: 15 }} />

      <WrapperView
        style={{ width: "90%", alignSelf: "center", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
      >
        <WrapperView
          style={{ width: "48%" }}
        >
          <SimpleTextInput label={'Expire Date'} placeholder={'MM/YY'} />

        </WrapperView>
        <WrapperView
          style={{ width: "48%" }}
        >
          <SimpleTextInput label={'CVV Code'} placeholder={'XXX'} />

        </WrapperView>
      </WrapperView>
      <WrapperView style={{ height: 15 }} />

      <WrapperView style={{ width: "90%", alignSelf: "center", flexDirection: "row", alignItems: "center" }}>
        <Checkbox status={'checked'} />
        <WrapperText style={{ color: "#282828" }}>Save card for future payments</WrapperText>

      </WrapperView>
      <WrapperView style={{ height: 20 }} />
      <WrapperView
        style={{ width: '90%', alignSelf: "center", backgroundColor: "#F3F3F3", padding: 10, borderRadius: 10 }}
      >
        <WrapperText>Pay securely with your Bank Account using Visa or Mastercard</WrapperText>
      </WrapperView>
      <WrapperView style={{ height: 15 }} />

      <WrapperView style={{ width: "90%", alignSelf: "center", }}>
        <ButtonView t={'PLACE ORDER'} />

      </WrapperView>
      </ScrollView>

    </WrapperView>
  )
}

export default CheckOutScreen