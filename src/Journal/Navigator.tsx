import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen, WeekViewScreen} from './screens';
import {Screens} from './types';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={Screens.Main}>
    <Stack.Screen name={Screens.Main} component={MainScreen} />
    <Stack.Screen
      name={Screens.WeekView}
      component={WeekViewScreen}
      options={{animation: 'slide_from_right'}}
    />
  </Stack.Navigator>
);
