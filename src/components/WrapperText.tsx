import { TextProps, Pressable, Text } from 'react-native';
import React from 'react';

interface PressableWrapperTextProps extends TextProps {
  onPress?: () => void;
}

const WrapperText: React.FC<TextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

const PressableWrapperText: React.FC<PressableWrapperTextProps> = ({ children, onPress, ...props }) => {
  return (
    <Pressable onPress={onPress}>
      <WrapperText {...props}>{children}</WrapperText>
    </Pressable>
  );
};

export { WrapperText, PressableWrapperText };
