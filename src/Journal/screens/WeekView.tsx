import React from 'react';
import {View, Text} from 'react-native';
import {EntryListView} from '../components';
import {WeekViewScreenProps} from '../types/screens.types';
import { EntryFolderStyles as styles } from '../styles';

export default ({navigation, route}: WeekViewScreenProps) => {
  const {weeksAgo, entries} = route.params;
  return (
    <View>
      <Text style={styles.title}>
        Entries from {weeksAgo} weeks ago
      </Text>
      <EntryListView entries={entries} />
    </View>
  );
};
