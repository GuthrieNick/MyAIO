import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Entries} from './EntryView.types';

export enum Screens {
  Main = 'Main',
  WeekView = 'WeekView',
}

export type WeekViewProps = {
  entries: Entries;
  weeksAgo: number;
};

export type JournalParamList = {
  Main: undefined;
  WeekView: WeekViewProps;
};

export type MainScreenProps = NativeStackScreenProps<
  JournalParamList,
  Screens.Main
>;

export type WeekViewScreenProps = NativeStackScreenProps<
  JournalParamList,
  Screens.WeekView
>;
