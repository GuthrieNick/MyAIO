import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EntryListViewProps} from './EntryView.types';

export enum Screens {
  Main = 'Main',
  Editor = 'Editor',
  WeekView = 'WeekView',
}

export type WeekViewProps = EntryListViewProps & {
  weeksAgo: number;
};

export type JournalParamList = {
  Main: undefined;
  Editor: undefined;
  WeekView: WeekViewProps;
};

export type MainScreenProps = NativeStackScreenProps<
  JournalParamList,
  Screens.Main
>;

export type EditorScreenProps = NativeStackScreenProps<
  JournalParamList,
  Screens.Editor
>;

export type WeekViewScreenProps = NativeStackScreenProps<
  JournalParamList,
  Screens.WeekView
>;
