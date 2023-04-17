import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
<<<<<<< HEAD
  DrawerContentComponentProps,
=======
>>>>>>> main
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Journal, {DrawerIcon as JournalIcon} from './Journal';
import Groceries, {DrawerIcon as GroceriesIcon} from './Groceries';
<<<<<<< HEAD

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
=======
import {store} from './redux/store';
import {Provider} from 'react-redux';

import HomeScreen, {Logo} from './Home';
import {APPS} from './types';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <Logo size={15} padding={20} center />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={APPS.Home}
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
    </Provider>
>>>>>>> main
  );
};
