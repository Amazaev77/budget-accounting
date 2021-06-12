import {
  ExpensesAction,
  ExpensesActionTypes,
  ExpensesState
} from "../types/expenses"

const initialState: ExpensesState = {
  items: [],
  loading: false,
  adding: false,
  deleting: null,
  copying: null,
};

export default function reducer(state = initialState, action: ExpensesAction) {
  switch (action.type) {
    case ExpensesActionTypes.LOAD_EXPENSES_STARTED:
      return {
        ...state,
        loading: true,
      }

    case ExpensesActionTypes.LOAD_EXPENSES_SUCCEEDED:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }

    case ExpensesActionTypes.ADD_EXPENSE_STARTED:
      return {
        ...state,
        adding: true,
      }

    case ExpensesActionTypes.ADD_EXPENSE_SUCCEEDED:
      return {
        ...state,
        adding: false,
        items: [...state.items, action.payload],
      }

    case ExpensesActionTypes.REMOVE_EXPENSE_STARTED:
      return {
        ...state,
        deleting: action.payload,
      }

    case ExpensesActionTypes.REMOVE_EXPENSE_SUCCEEDED:
      return {
        ...state,
        deleting: false,
        items: state.items.filter((item) => item.id !== action.payload),
      }

    case ExpensesActionTypes.COPY_EXPENSE_STARTED:
      return {
        ...state,
        copying: action.payload,
      }

    case ExpensesActionTypes.COPY_EXPENSE_SUCCEEDED:
      const oldElement = state.items.find(el => el.id === action.payload.id)

      return {
        ...state,
        copying: false,
        items: [...state.items, { ...oldElement, id: action.payload.newElemId }],
      }

    default:
      return state;
  }
}