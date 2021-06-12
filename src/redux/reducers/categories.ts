import {
  CategoriesAction,
  CategoriesActionTypes,
  CategoriesState
} from "../types/categories";

const initialState: CategoriesState = {
  items: [],
  loading: false,
  editing: false,
  adding: false,
  deleting: null,
}

export default function reducer(state = initialState, action: CategoriesAction) {
  switch (action.type) {
    case CategoriesActionTypes.LOAD_CATEGORIES_STARTED:
      return {
        ...state,
        loading: true,
      }

    case CategoriesActionTypes.LOAD_CATEGORIES_SUCCEEDED:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }

    case CategoriesActionTypes.ADD_CATEGORY_STARTED:
      return {
        ...state,
        adding: true,
      }

    case CategoriesActionTypes.ADD_CATEGORY_SUCCEEDED:
      return {
        ...state,
        adding: false,
        items: [...state.items, action.payload],
      }

    case CategoriesActionTypes.EDIT_CATEGORY_STARTED:
      return {
        ...state,
        editing: true,
      }

    case CategoriesActionTypes.EDIT_CATEGORY_SUCCEEDED:
      return {
        ...state,
        editing: false,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      }

    case CategoriesActionTypes.REMOVE_CATEGORY_STARTED:
      return {
        ...state,
        deleting: action.payload,
      }

    case CategoriesActionTypes.REMOVE_CATEGORY_SUCCEEDED:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        deleting: false
      }

    default:
      return state;
  }
}