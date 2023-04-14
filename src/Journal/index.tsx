import React from 'react';
import {Text, Image} from 'react-native'

export const DrawerIcon = ({size}: {size: number}) =>
    <Image source={require('./assets/icon.png')} style={{height: size, width: size, resizeMode: 'contain'}} />;

export default () => <Text>Journal</Text>