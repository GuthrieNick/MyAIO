export enum APPS { Home = "Home", Groceries = "Groceries", Journal = "Journal"};

import {DrawerScreenProps} from '@react-navigation/drawer'

export type DrawerParamList = {
    Home: undefined;
    Groceries: undefined;
    Journal: undefined;
}

export type HomeProps = DrawerScreenProps<DrawerParamList, APPS.Home>;
export type GroceriesProps = DrawerScreenProps<DrawerParamList, APPS.Groceries>;
export type JournalProps = DrawerScreenProps<DrawerParamList, APPS.Journal>;