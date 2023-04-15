import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {EntryView, EntryViewProps as EVProps} from '../components';
import {FloatingAction} from 'react-native-floating-action';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {EntryFolderOverride} from '../components/EntryFolder';

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

export default ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={mockData}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={() => <View style={{margin: 5}} />}
        renderItem={({item}) => <EntryView {...item} />}
        keyExtractor={(_item, index) => index.toString()}
      />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={({item}) => <EntryFolderOverride text={item.toString()} />}
        keyExtractor={item => item.toString()}
      />
      <TouchableOpacity onPress={() => console.log('press')}>
        <View
          style={{
            width: 50,
            height: 50,
            position: 'absolute',
            backgroundColor: 'black',
            borderRadius: 50,
            bottom: 200,
            right: 20,
            marginRight: 30,
          }}>
          <Text style={{fontSize: 30}}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
