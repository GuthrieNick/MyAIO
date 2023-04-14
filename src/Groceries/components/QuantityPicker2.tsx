import React, {useState} from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export interface QuantityPicker2Props {
  onChange: (value: number) => void;
  value: number;
  style?: Object;
}

export default (props: QuantityPicker2Props) => {
  const [manual, setManual] = useState(false);

  return (
    <View style={{...props.style, ...qp2Styles.view}}>
      <TextInput
        style={{
          ...qp2Styles.quantityInput,
          display: manual || props.value > 1 ? undefined : 'none',
          borderBottomWidth: Number(manual),
        }}
        keyboardType="numeric"
        onFocus={() => setManual(true)}
        onSubmitEditing={() => setManual(false)}
        value={props.value.toString()}
        onChangeText={value => props.onChange(parseInt(value))}
      />
      <View>
        <TouchableOpacity
          style={qp2Styles.increase}
          onPress={() => props.onChange(props.value + 1)}>
          <MCIcon
            name="menu-up"
            color="black"
            size={24}
            style={qp2Styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={qp2Styles.decrease}
          onPress={() => props.onChange(Math.max(1, props.value - 1))}>
          <MCIcon
            name="menu-down"
            color="black"
            size={24}
            style={qp2Styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const qp2Styles = StyleSheet.create({
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

  increase: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'lightgray',
  },

  decrease: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'lightgray',
  },

  icon: {
    marginHorizontal: 2,
  },

  quantityInput: {
    color: 'black',
    justifyContent: 'center',
    paddingVertical: 0,
    marginRight: 5,
    textAlign: 'center',
    fontSize: 15,
  },
});
