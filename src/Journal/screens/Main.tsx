import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {EntryView, EntryViewProps as EVProps} from '../components';

const mockData: EVProps[] = [
  {
    mood: 'happy',
    saved: new Date(Date.now() - 1000 * 60 * 60 * 16),
    description:
      'I went to the store and found the toothpaste I was looking for.',
  },
  {
    mood: 'angry',
    saved: new Date(Date.now() - 1000 * 60 * 60),
    description:
      'They turned off the water, so I had to drive somewhere else to shower.',
  },
  {
    mood: 'peaceful',
    saved: new Date(),
    description:
      "I ate donuts and had my coffee and watched some YT vids. It's so nice out right now.",
  },
];

const Separator = () => <View style={{borderBottomWidth: 1, borderBottomColor: 'gray', marginHorizontal: 20, marginVertical: 10}} />

export default () => {
  return (
    <View>
      <FlatList
        data={mockData}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => <EntryView {...item}/>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
