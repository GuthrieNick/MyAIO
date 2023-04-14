import React from 'react';
import {StyleSheet, View} from 'react-native';

interface ListItemProps {
  style?: Object;
  children: JSX.Element | JSX.Element[];
}

export default (props: ListItemProps) => (
  <View style={{...listItemStyles.item, ...props.style}}>{props.children}</View>
);

const listItemStyles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
});
