import {SET_DARK_THEME, SET_LIGHT_THEME, SWITCH_THEME} from './types';

export const setDarkTheme = () => ({
  type: SET_DARK_THEME,
});

export const setLightTheme = () => ({
  type: SET_LIGHT_THEME,
});

export const switchTheme = () => ({
  type: SWITCH_THEME,
});
