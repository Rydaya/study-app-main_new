import { GET_ITEM_SUCSESS, DELETE_ITEM, EDIT_ITEM } from './constans.js';

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_ITEM_SUCSESS:
      return {
        ...state,
        data: action.payload.data,
      };
    case DELETE_ITEM:
      return {
        ...state,
        data: state.data.filter((elem) => elem.created !== action.payload.id),
      };
    case EDIT_ITEM:
      return {
        ...state,
        data: state.data.map((elem) =>
          elem.created === action.payload.id ? { ...elem, name: action.payload.newName } : elem,
        ),
      };
  }
};
