import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {FlatList, View} from 'react-native';
import ItemEntry from '../components/ItemEntry';
import {ItemViewer} from '../components/ItemViewer';
import {STYLES} from '../styles';
import {State} from '../redux/reducers';
import ListItem from '../components/ListItem';

export default (_props: any) => {
  const data = useSelector((state: State) => state.itemList);
  console.log(JSON.stringify(data, null, 2));

  return (
    <View style={STYLES.fullView}>
      {
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ListItem>
              <ItemViewer item={item} />
            </ListItem>
          )}
          keyExtractor={(_item, index) => index.toString()}
        />
      }
      <ItemEntry />
    </View>
  );
};
