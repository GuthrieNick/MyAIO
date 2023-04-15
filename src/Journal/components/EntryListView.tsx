import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {EntryListViewProps} from '../types';
import EntryView from './EntryView';

const Separator = () => (
  <View
    style={{
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      marginHorizontal: 20,
    }}
  />
);

export default ({entries}: EntryListViewProps) => (
  <FlatList
    data={entries}
    renderItem={({item}) => <EntryView {...item} />}
    keyExtractor={(_item, index) => index.toString()}
    ListHeaderComponent={Separator}
    ItemSeparatorComponent={Separator}
  />
);
