import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditorScreen, MainScreen} from './screens';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Editor" component={EditorScreen} />
  </Stack.Navigator>
);
