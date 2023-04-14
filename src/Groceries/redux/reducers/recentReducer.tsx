import {Types} from '../actions';
import {Recent, Recents} from '../../types';
const initialState: Recents = [];

type Action = {
  type: string;
  payload: string;
};

export default (state: Recents = initialState, action: Action) => {
  const {type, payload} = action;

  switch (type) {
    case Types.ADD_RECENT:
      if (!state.map(item => item.name).includes(payload))
        state.push({name: payload, favorite: false});
      return state.sort();

    case Types.REMOVE_RECENT:
      return state.splice(state.map(item => item.name).indexOf(payload));

    case Types.ADD_FAVORITE:
      state[state.map(item => item.name).indexOf(payload)].favorite = true;
      return state;

    case Types.REMOVE_FAVORITE:
      state[state.map(item => item.name).indexOf(payload)].favorite = false;
      return state;

    case Types.CLEAR_SAVED:
      return [];

    default:
      return state;
  }
};
