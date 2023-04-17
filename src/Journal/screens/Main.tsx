import React, {ComponentType, useState} from 'react';
import {
  Text,
  View,
  SectionList,
  TouchableNativeFeedback as Touchable,
} from 'react-native';
import {EntryFolderOverride} from '../components/EntryFolder';
import {Entry, MainScreenProps, Screens} from '../types';
import {EntryFolderStyles as efStyles, MainStyles as mStyles} from '../styles';
import {mockData} from '../assets/mockData';
import {EntryView, ItemSeparator, SectionSeparator} from '../components';
import ActionButton from 'react-native-action-button';
import {EditorPopup} from '../components';
import Modal from 'react-native-modal';

type SectionDatum = {
  title: string;
  data: Array<any>;
  renderItem: React.FC<any>;
  ItemSeparatorComponent: ComponentType<any>;
  ListHeaderComponent: ComponentType<any>;
  ListFooterComponent: ComponentType<any>;
};

export default ({navigation}: MainScreenProps) => {
  const [modalVisible, setModalVisible] = useState(true);

  const sectionData: SectionDatum[] = [
    {
      title: 'Notes from this week',
      data: mockData,
      renderItem: ({item}: {item: Entry}) => <EntryView {...item} />,
      ItemSeparatorComponent: ItemSeparator,
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
      ItemSeparatorComponent: SectionSeparator,
      ListFooterComponent: () => (
        <View
          style={{
            borderColor: 'gray',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            marginBottom: 5,
          }}>
          <EntryFolderOverride
            text="View all"
            onPress={() => console.log('not implemented')}
          />
        </View>
      ),
      ListHeaderComponent: SectionSeparator,
    },
  ];

  const onPress = (item: number) =>
    navigation.navigate(Screens.WeekView, {
      weeksAgo: item,
      entries: mockData,
    });

  return (
    <View style={{flex: 1}}>
      <SectionList
        sections={sectionData}
        renderSectionHeader={({section}) => (
          <View>
            <Text style={efStyles.title}>{section.title}</Text>
            <section.ListHeaderComponent />
          </View>
        )}
        renderItem={({section}) => <section.renderItem />}
        ItemSeparatorComponent={({section: {ItemSeparatorComponent}}) => (
          <ItemSeparatorComponent />
        )}
        renderSectionFooter={({section: {ListFooterComponent}}) => (
          <ListFooterComponent />
        )}
      />
      <ActionButton onPress={() => setModalVisible(true)} />
      <Modal
        isVisible={modalVisible}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}>
        <View>
          <EditorPopup onHide={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};
