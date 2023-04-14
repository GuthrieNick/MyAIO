import {
  ADD_FAVORITE,
  ADD_RECENT,
  REMOVE_FAVORITE,
  REMOVE_RECENT,
} from './types';

export const addRecent = (payload: string) => ({type: ADD_RECENT, payload});
export const removeRecent = (payload: string) => ({
  type: REMOVE_RECENT,
  payload,
});

export const addFavorite = (payload: string) => ({type: ADD_FAVORITE, payload});
export const removeFavorite = (payload: string) => ({
  type: REMOVE_FAVORITE,
  payload,
});
