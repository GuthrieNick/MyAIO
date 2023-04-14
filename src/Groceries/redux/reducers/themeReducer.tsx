import {ColorTheme} from '../../types';
import {Types} from '../actions';

const initialState: ColorTheme = ColorTheme.DARK;

export default (state: ColorTheme = initialState, action: {type: string}) => {
  const {type} = action;

  switch (type) {
    case Types.SET_DARK_THEME:
      return ColorTheme.DARK;

    case Types.SET_LIGHT_THEME:
      return ColorTheme.LIGHT;

    case Types.SWITCH_THEME:
      return state === ColorTheme.DARK ? ColorTheme.LIGHT : ColorTheme.DARK;

    default:
      return state;
  }
};
