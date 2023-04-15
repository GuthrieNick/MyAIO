import React from 'react';
import {View} from 'react-native';
import { EntryFolderStyles } from '../styles';

export const ItemSeparator = () => (
  <View
    style={{
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      marginHorizontal: 20,
    }}
  />
);

export const SectionSeparator = () => (
    <View style={EntryFolderStyles.folderList} />
  );