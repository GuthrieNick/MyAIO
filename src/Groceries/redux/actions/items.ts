import {ADD_ITEM, CLEAR_SAVED, REMOVE_ITEM, UPDATE_ITEM} from './types';
import {Item} from '../../types';

export const addItem = (payload: Item) => ({type: ADD_ITEM, payload});
export const updateItem = (payload: Item) => ({
  type: UPDATE_ITEM,
  payload,
});
export const removeItem = (payload: Item) => ({type: REMOVE_ITEM, payload});
