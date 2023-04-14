import React from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TouchableIconProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  icon: string;
  size?: number;
  color?: string;
}

export const TouchableIcon = (props: TouchableIconProps) => (
  <TouchableOpacity onPress={props.onPress} style={{...props.style, justifyContent: 'center'}}>
    <MCIcon
      name={props.icon}
      size={props.size}
      color={props.color ?? 'black'}
    />
  </TouchableOpacity>
);
