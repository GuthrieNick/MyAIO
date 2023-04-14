import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import actions from '../redux/actions';
import {STYLES} from '../styles';
import {Item} from '../types';
import QuantityPicker2 from './QuantityPicker2';
import {TouchableIcon} from './TouchableIcon';

interface ItemViewerProps {
  item: Item;
}

export const ItemViewer = ({item}: ItemViewerProps) => {
  const dispatch = useDispatch();
  const name = item.name;
  const [quantity, setQuantity] = useState(item.quantity);
  const [editing, setEditing] = useState(false);

  dispatch(actions.clearSaved());

  const updateQuantity = (value: number) => {
    setQuantity(value);
    dispatch(actions.updateItem({...item, quantity: value}));
  };

  const NameEditor = () => {
    const [name, setName] = useState(item.name);
    const onDone = () => {
      if (name !== item.name) dispatch(actions.updateItem({...item, name}));
      setEditing(false);
    };

    return (
      <View style={itemViewerStyles.item}>
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Add an item..."
          placeholderTextColor="#999999"
          onSubmitEditing={onDone}
        />
      </View>
    );
  };

  return (
    <View style={itemViewerStyles.item}>
      {editing ? (
        <NameEditor />
      ) : (
        <TouchableOpacity
          style={itemViewerStyles.nameArea}
          onPress={() => setEditing(true)}>
          <Text style={STYLES.text}>{name}</Text>
        </TouchableOpacity>
      )}
      <View style={{...STYLES.flexRow}}>
        <QuantityPicker2
          onChange={value => {
            updateQuantity(value);
          }}
          value={quantity}
        />
        <TouchableIcon
          onPress={() => {
            dispatch(actions.removeItem(item));
          }}
          icon="check"
          size={24}
          style={itemViewerStyles.check}
        />
      </View>
    </View>
  );
};

const itemViewerStyles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
  },

  numberArea: {
    width: 40,
    justifyContent: 'center',
    marginLeft: 10,
    //flex: 4,
  },

  nameArea: {
    flex: 6,
  },

  check: {
    borderRadius: 30,
    backgroundColor: 'lightgray',
    padding: 11,
  },
});
