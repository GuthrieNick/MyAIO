import React from 'react';
import {View, Text} from 'react-native';
import {EntryListView, EntryView} from '../components';
import {WeekViewScreenProps} from '../types/screens.types';
import {EntryFolderStyles as styles} from '../styles';
import {FlatList} from 'react-native-gesture-handler';
import {ItemSeparator} from '../components/Separator';

export default ({route}: WeekViewScreenProps) => {
  const {weeksAgo, entries} = route.params;
  return (
    <View>
      <Text style={styles.title}>Entries from {weeksAgo} week{weeksAgo > 1 ? 's' : ''} ago</Text>
      <EntryListView entries={entries} />
    </View>
  );
};
