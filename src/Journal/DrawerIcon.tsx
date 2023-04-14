import React from "react";
import { Image } from "react-native";

export default  ({size}: {size: number}) =>
    <Image
        source={require('./assets/icon.png')}
        style={{
            width: size,
            height: size,
            resizeMode: 'contain'
        }}
    />;
