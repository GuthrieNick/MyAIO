import React from 'react';
import {Text, View} from 'react-native';
import {getDateString} from '../../utils';

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

export const EntryFolderOverride = ({text}: {text: string}) => (
  <View style={{marginVertical: 20}}>
    <Text>{text}</Text>
  </View>
);
