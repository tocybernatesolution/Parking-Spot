import { Pressable, Text, TextProps } from 'react-native';
import React from 'react';
import WrapperView from './WrapperView';
interface ButtonViewProps {
    t: string;
    onPress?: () => void;
  }
const ButtonView :React.FC<ButtonViewProps>= ({ t,onPress }) => {
  return (
    <Pressable
    onPress={onPress}
    >

    <WrapperView
      style={{
        width: "100%",
        backgroundColor: "#365F8D",
        padding: 22,
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <Text style={{ color: "#fff" }}>{t}</Text>
    </WrapperView>
    </Pressable>

  );
};

export default ButtonView;
