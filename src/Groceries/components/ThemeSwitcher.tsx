import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/actions';
import {State} from '../redux/reducers';
import {ColorTheme} from '../types';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: State) => state.theme);

  return (
    <TouchableOpacity
      onPress={() => dispatch(actions.switchTheme())}
      style={tsStyles.view}>
      <MCIcon
        name="white-balance-sunny"
        size={24}
        color={theme === ColorTheme.LIGHT ? 'yellow' : 'gray'}
        style={tsStyles.iconLeft}
      />
      <MCIcon
        name="moon-waxing-crescent"
        size={24}
        color={theme === ColorTheme.DARK ? 'white' : 'gray'}
        style={tsStyles.iconRight}
      />
    </TouchableOpacity>
  );
};

const tsStyles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 3,
    backgroundColor: 'black',
    marginRight: 10,
    padding: 3,
  },

  iconLeft: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginRight: 5,
  },

  iconRight: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginLeft: 5,
  },
});
