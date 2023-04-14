import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {TouchableIcon} from './TouchableIcon';

export interface QuantityPickerProps {
  onChange: (value: number) => void;
  value: number | undefined;
  style?: Object;
}

export default (props: QuantityPickerProps) => {
  const [manual, setManual] = useState(false);

  return (
    <View style={{...quantityPickerStyles.view, ...props.style}}>
      <TouchableIcon
        onPress={() =>
          props.onChange(Math.max(0, props.value ? props.value - 1 : 0))
        }
        style={{display: props.value ? undefined : 'none'}}
        icon="minus-circle"
        size={36}
        color="gray"
      />
      <View
        style={{
          display: manual || props.value ? undefined : 'none',
        }}>
        <TextInput
          keyboardType="numeric"
          onChangeText={text =>
            props.onChange(parseInt(text.length ? text : '0'))
          }
          value={props.value?.toString() || '0'}
          style={quantityPickerStyles.number}
          onSubmitEditing={() => setManual(false)}
          onFocus={() => setManual(true)}
        />
      </View>
      <TouchableIcon
        onPress={() => props.onChange(props.value ? props.value + 1 : 1)}
        icon="plus-circle"
        size={36}
        color="gray"
      />
    </View>
  );
};

const quantityPickerStyles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'lightgray',
    marginHorizontal: 5,
  },

  number: {
    borderBottomWidth: 1,
    color: 'black',
    justifyContent: 'center',
    paddingVertical: 0,
    textAlign: 'center',
  },
});
