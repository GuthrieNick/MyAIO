import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {STYLES} from '../styles';
import {defaultItem, Item} from '../types';
import {useDispatch} from 'react-redux';
import actions from '../redux/actions';
import QuantityPicker2 from './QuantityPicker2';

export default () => {
  const dispatch = useDispatch();

  const [item, _setItem] = useState<Item>(defaultItem);

  const setItem = (i: Item) => {
    _setItem(i);
  };

  const toSentence = (str: string) =>
    str.length > 0 ? str[0].toUpperCase() + str.substring(1) : '';

  const setQuantity = (amnt: number | undefined) =>
    setItem({...item, quantity: amnt === 0 ? undefined : amnt});

  const setName = (name: string) => setItem({...item, name: toSentence(name)});

  const addItem = () => {
    if (item.name !== '') {
      let toAdd = {...item, name: item.name.trim()}
      dispatch(actions.addItem(toAdd));
      dispatch(actions.addRecent(toAdd.name));
      setItem(defaultItem);
    }
  };

  return (
    <View style={itemEntryStyles.main}>
      <TextInput
        style={itemEntryStyles.input}
        onChangeText={setName}
        value={item.name}
        placeholder="Add an item..."
        placeholderTextColor="#999999"
      />
      <View style={STYLES.flexRow}>
        <QuantityPicker2
          onChange={setQuantity}
          value={item.quantity ? item.quantity : 0}
        />
        <TouchableOpacity
          style={itemEntryStyles.addItemButton}
          onPress={addItem}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                ...itemEntryStyles.addItemText,
                color: item.name !== '' ? 'white' : 'lightgray',
              }}>
              Add
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const itemEntryStyles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },

  input: {
    color: 'black',
    paddingHorizontal: 10,
    flex: 1,
  },

  addItemButton: {
    backgroundColor: '#24a0ed',
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
    marginRight: 5,
  },

  addItemText: {
    fontSize: 15,
    paddingHorizontal: 15,
  },
});
