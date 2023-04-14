import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import {YourList, RecipeList, RecentList} from './screens';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator screenOptions={{headerRight: () => <ThemeSwitcher/>}}>
    <Tab.Screen
      name="Your List"
      component={YourList}
      options={{
        tabBarIcon: ({color, size}) => (
          <MCIcon
            name={'playlist-edit'}
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Recent"
      component={RecentList}
      options={{
        tabBarIcon: ({color, size}) => (
          <MCIcon
            name={'format-list-bulleted'}
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Recipes"
      component={RecipeList}
      options={{
        tabBarIcon: ({color, size}) => (
          <MCIcon
            name={'align-horizontal-left'}
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
