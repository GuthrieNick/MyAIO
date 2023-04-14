import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid as Toast,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from '../components/ListItem';
import {TouchableIcon} from '../components/TouchableIcon';
import actions from '../redux/actions';
import {State} from '../redux/reducers';
import {STYLES} from '../styles';

export default () => {
  const {itemList, recents} = useSelector((state: State) => state);
  const dispatch = useDispatch();

  const addItem = (name: string) => {
    for (let item of itemList)
      if (item.name === name)
        Toast.show(item.name + ' is already in your list', Toast.SHORT);
    dispatch(
      actions.addItem({
        name,
        index: (itemList[itemList.length - 1]?.index && 0) + 1,
        quantity: 1,
      }),
    );
  };

  if (recents.length === 0) return (
    <View>
      <Text style={STYLES.text}>You do not currently have any recent items.</Text>
    </View>
  )

  return (
    <View>
      <FlatList
        data={recents}
        renderItem={({item}) => (
          <ListItem style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableIcon
              onPress={() => dispatch(actions.removeRecent(item.name))}
              icon={'close'}
              size={24}
              color="gray"
            />
            <TouchableOpacity
              onPress={() => addItem(item.name)}
              style={{flex: 1}}>
              <Text style={STYLES.text}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableIcon
              onPress={() => {
                dispatch(
                  item.favorite
                    ? actions.removeFavorite(item.name)
                    : actions.addFavorite(item.name),
                );
              }}
              icon={'star'}
              size={24}
              color={item.favorite ? 'yellow' : 'gray'}
            />
          </ListItem>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
