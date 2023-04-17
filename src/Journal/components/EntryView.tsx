import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {getDateTimeString} from '../../utils';
import {Entry} from '../types';
import {EntryViewStyles as styles} from '../styles';

type SectionProps = {
  name: string;
  value: string;
  style?: StyleProp<ViewStyle>;
};

const Section = ({name, value, style}: SectionProps) => (
  <View style={style}>
    <Text style={styles.text}>
      <Text style={{fontWeight: 'bold'}}>{name}</Text>
      <Text>: {value}</Text>
    </Text>
  </View>
);

export default ({mood, saved, description}: Entry) => (
  <View style={styles.outerView}>
    <View style={styles.topView}>
      <Section style={{flex: 2}} name={'Mood'} value={mood} />
      <Section
        style={{flex: 3}}
        name={'Saved'}
        value={getDateTimeString(new Date(saved))}
      />
    </View>
    <Text style={styles.text}>{description}</Text>
  </View>
);
