import React from 'react';
import {Image} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux'

export const DrawerIcon = ({size}: {size: number}) =>
    <Image source={require('./assets/icon.png')} style={{height: size, width: size, resizeMode: 'contain'}} />;

import BottomTabContainer from './BottomTabContainer';
import { store } from './redux';

export default () => (
    <ReduxProvider store={store}>
        <BottomTabContainer />
    </ReduxProvider>
)