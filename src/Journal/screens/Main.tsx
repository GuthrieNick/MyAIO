import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {EntryView, EntryViewProps as EVProps} from '../components';
import {FloatingAction} from 'react-native-floating-action';

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

const Separator = () => (
  <View
    style={{
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      marginHorizontal: 20,
      marginVertical: 10,
    }}
  />
);

export default () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={mockData}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => <EntryView {...item} />}
        keyExtractor={(_item, index) => index.toString()}
      />
      <FloatingAction showBackground={false}
        onPressMain={() => console.log("Editor")}
      />
    </View>
  );
};
