import React from 'react';
import {View, Text} from 'react-native';
import { getDateTimeString } from '../../utils';
import { EntryViewProps } from '../types';
import { EntryViewStyles as styles } from '../styles';

const Section = ({name, value}: {name: string; value: string}) => (
  <Text style={styles.text}>
    <Text style={{fontWeight: 'bold'}}>{name}</Text>
    <Text>: {value}</Text>
  </Text>
);

export default ({mood, saved, description}: EntryViewProps) => (
  <View style={styles.outerView}>
    <View style={styles.topView}>
      <Section name={'Mood'} value={mood} />
      <Section name={'Saved'} value={getDateTimeString(new Date(saved))} />
    </View>
    <Text style={styles.text}>{description}</Text>
  </View>
);
