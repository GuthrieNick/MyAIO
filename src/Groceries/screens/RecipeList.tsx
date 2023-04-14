import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {STYLES} from '../styles';

export default () => {
  return (
    <View style={STYLES.fullView}>
      <FlatList
        data={['test 1', 'test 2']}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(_item, index) => index.toString()}
      />
      <TouchableOpacity>
        <Text style={STYLES.text}>Add a recipe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  newPlan: {

  }
});