import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Journal, {DrawerIcon as JournalIcon} from './Journal';
import Groceries, {DrawerIcon as GroceriesIcon} from './Groceries';

import HomeScreen, {Logo} from './Home';
import {APPS} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => (
  <DrawerContentScrollView {...props}>
    <TouchableOpacity onPress={() => props.navigation.navigate(APPS.Home)}>
      <Logo size={15} padding={20} center />
    </TouchableOpacity>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={APPS.Journal}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name={APPS.Home}
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name={APPS.Groceries}
          component={Groceries}
          options={{
            title: 'Groceries',
            drawerIcon: GroceriesIcon,
          }}
        />
        <Drawer.Screen
          name={APPS.Journal}
          component={Journal}
          options={{
            title: 'Journal',
            drawerIcon: JournalIcon,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
