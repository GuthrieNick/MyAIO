import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { getDateTimeString } from '../../utils';

export type Props = {
  mood: string;
  saved: Date;
  description: string;
};

const b: React.FC<any> = ({children}) => (
  <Text style={{fontWeight: 'bold'}}>{children}</Text>
);

const Section = ({name, value}: {name: string; value: string}) => (
  <Text style={styles.text}>
    <Text style={{fontWeight: 'bold'}}>{name}</Text>
    <Text>: {value}</Text>
  </Text>
);

export default ({mood, saved, description}: Props) => (
  <View style={styles.outerView}>
    <View style={styles.topView}>
      <Section name={'Mood'} value={mood} />
      <Section name={'Saved'} value={getDateTimeString(saved)} />
    </View>
    <View style={{margin: 10}} />
    <Text style={styles.text}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  outerView: {
    marginHorizontal: 20,
  },
  text: {
    color: 'black',
  },
  mood: {
    marginRight: 30,
  },
  topView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
