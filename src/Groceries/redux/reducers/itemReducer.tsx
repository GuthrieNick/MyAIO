import {Types} from '../actions';
import {Item, Items} from '../../types';
const initialState: Items = [];

type Action = {
  type: string;
  payload: Item;
};

export default (state: Items = initialState, action: Action): Items => {
  const {type, payload} = action;
  console.log(action);

  switch (type) {
    case Types.ADD_ITEM:
      if (state.length === 0) return [{...payload, index: 1}];

      if (state.map(item => item.name).includes(payload.name))
        return state
          .map(item =>
            item.name === payload.name
              ? {
                  ...item,
                  name: payload.name,
                  quantity: (item.quantity ?? 1) + (payload.quantity ?? 1),
                }
              : item,
          )
          .sort((a, b) => a.index - b.index);
      return [
        ...state,
        {
          ...payload,
          index:
            state
              .map(item => item.index)
              .reduce((prev, cur) => (cur > prev ? cur : prev)) + 1,
        },
      ].sort((a, b) => a.index - b.index);

    case Types.UPDATE_ITEM:
      return state.map(item => (item.name === payload.name ? payload : item));

    case Types.REMOVE_ITEM:
      return state.filter(item => item !== payload);

    case Types.CLEAR_SAVED:
      return [];

    default:
      return state;
  }
};
