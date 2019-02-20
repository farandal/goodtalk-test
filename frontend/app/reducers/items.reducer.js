import { itemsConstants as C } from '../constants';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ITEM:
      if (state.find(item => item === action.item)) {
        return state;
      } else {
        return [action.item, ...state];
      }
    case C.DELETE_ITEM:
      console.log('state', state);
      console.log('remove', action.item);
      return state.filter(item => item !== action.item);
    case C.GET_ITEMS:
      let processedItems = action.items.map((item, i) => {
        return {
          id: item.id,
          name: item.name || '',
          description: item.description || ''
        };
      });

      state = processedItems;

      return state;
    default:
      return state;
  }
};

export default itemsReducer;
