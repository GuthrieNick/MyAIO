import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  EntryFolderOverride,
  FolderListSeparator,
} from '../components/EntryFolder';
import EntryListView from '../components/EntryListView';
import {Screens} from '../types';
import {EntryFolderStyles as efStyles, MainStyles as mStyles} from '../styles';
import {mockData} from '../assets/mockData';

export default ({navigation}: {navigation: any}) => {
  const onPress = (item: number) =>
    navigation.navigate(Screens.WeekView, {
      weeksAgo: item,
      entries: mockData,
    });
  return (
    <View>
      <Text style={efStyles.title}>Notes from this week</Text>
      <EntryListView entries={mockData} />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={({item}) => (
          <EntryFolderOverride
            text={item.toString()}
            onPress={() => onPress(item)}
          />
        )}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={FolderListSeparator}
        ListFooterComponent={FolderListSeparator}
        ItemSeparatorComponent={FolderListSeparator}
      />
      <TouchableOpacity onPress={() => console.log('press')}>
        <View style={mStyles.addButton}>
          <Text style={mStyles.addButtonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
