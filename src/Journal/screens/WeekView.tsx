import React from 'react';
import {View, Text} from 'react-native';
import {EntryListView, EntryView} from '../components';
import {WeekViewScreenProps} from '../types/screens.types';
import {EntryFolderStyles as styles} from '../styles';
import {FlatList} from 'react-native-gesture-handler';
import Separator from '../components/Separator';

export default ({route}: WeekViewScreenProps) => {
  const {weeksAgo, entries} = route.params;
  return (
    <View>
      <Text style={styles.title}>Entries from {weeksAgo} weeks ago</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => <EntryView {...item} />}
        keyExtractor={(_item, index) => index.toString()}
        ListHeaderComponent={Separator}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};
