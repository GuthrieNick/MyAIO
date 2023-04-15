import React from 'react';
import {Text, View} from 'react-native';
import {getDateString} from '../../utils';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EntryFolderStyles as styles } from '../styles';

export type Props = {
  startDate: Date;
  endDate: Date;
};

export default ({startDate, endDate}: Props) => (
  <View style={{marginVertical: 20}}>
    <Text>
      {getDateString(startDate)} - {getDateString(endDate)}
    </Text>
  </View>
);

export const EntryFolderOverride = ({text, onPress}: {text: string; onPress: () => void}) => (
  <TouchableOpacity style={styles.view} onPress={onPress}>
    <Text style={{color: 'black'}}>{text}</Text>
    <MCIcon name="chevron-right" color="black" size={20} />
  </TouchableOpacity>
);

export const FolderListSeparator = () => (
  <View style={styles.folderList} />
);