import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import recentReducer from './recentReducer';
import themeReducer from './themeReducer';

const appReducer = combineReducers({
  itemList: itemReducer,
  recents: recentReducer,
  theme: themeReducer,
});

export default appReducer;

export type State = ReturnType<typeof appReducer>;
