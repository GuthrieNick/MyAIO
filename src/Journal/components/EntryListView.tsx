import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Entries} from '../types';
import EntryView from './EntryView';
import {ItemSeparator} from './Separator';

export default ({entries}: {entries: Entries}) => (
  <FlatList
    data={entries}
    renderItem={({item}) => <EntryView {...item} />}
    keyExtractor={(_item, index) => index.toString()}
    ListHeaderComponent={ItemSeparator}
    ItemSeparatorComponent={ItemSeparator}
  />
);
