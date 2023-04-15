import React, {ComponentType} from 'react';
import {Text, View, SectionList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  EntryFolderOverride,
  FolderListSeparator,
} from '../components/EntryFolder';
import {EntryViewProps, Screens} from '../types';
import {EntryFolderStyles as efStyles, MainStyles as mStyles} from '../styles';
import {mockData} from '../assets/mockData';
import {EntryView} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import Separator from '../components/Separator';

type SectionDatum = {
  title: string;
  data: Array<any>;
  renderItem: React.FC<any>;
  ItemSeparatorComponent: ComponentType<any>;
  ListHeaderComponent: ComponentType<any>;
  ListFooterComponent: ComponentType<any>;
};

export default ({navigation}: {navigation: any}) => {
  const data: SectionDatum[] = [
    {
      title: 'Notes from this week',
      data: mockData,
      renderItem: ({item}: {item: EntryViewProps}) => <EntryView {...item} />,
      ItemSeparatorComponent: Separator,
      ListFooterComponent: () => <View style={{marginVertical: 10}} />,
      ListHeaderComponent: () => null,
    },
    {
      title: 'Past weeks',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      renderItem: ({item}: {item: number}) => (
        <EntryFolderOverride
          text={item.toString() + ' week' + (item > 1 ? 's' : '') + ' ago'}
          onPress={() => onPress(item)}
        />
      ),
      ItemSeparatorComponent: FolderListSeparator,
      ListFooterComponent: () => (
        <View style={{borderColor: 'gray', borderTopWidth: 1, borderBottomWidth: 1, marginBottom: 5}}>
          <EntryFolderOverride
            text="View all"
            onPress={() => console.log('not implemented')}
          />
        </View>
      ),
      ListHeaderComponent: FolderListSeparator
    },
  ];

  const onPress = (item: number) =>
    navigation.navigate(Screens.WeekView, {
      weeksAgo: item,
      entries: mockData,
    });

  return (
    <SafeAreaView>
      <SectionList
        StickyHeaderComponent={() => null}
        stickyHeaderHiddenOnScroll={true}
        stickySectionHeadersEnabled={false}
        sections={data}
        renderSectionHeader={({section}) => (
          <View>
            <Text style={efStyles.title}>{section.title}</Text>
            <section.ListHeaderComponent/>
          </View>
        )}
        renderItem={({section}) => <section.renderItem />}
        ItemSeparatorComponent={({section}) => (
          <section.ItemSeparatorComponent />
        )}
        renderSectionFooter={({section}) => <section.ListFooterComponent />}
      />
      <TouchableOpacity onPress={() => navigation.navigate(Screens.Editor)}>
        <View style={mStyles.addButton}>
          <Text style={mStyles.addButtonText}>+</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
