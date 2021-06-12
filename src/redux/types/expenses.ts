export interface ExpensesState {
  items: any[],
  loading: boolean,
  adding: boolean,
  deleting: any,
  copying: any,
}

export enum ExpensesActionTypes {
  ADD_EXPENSE_STARTED = 'ADD_EXPENSE_STARTED',
  ADD_EXPENSE_SUCCEEDED = 'ADD_EXPENSE_SUCCEEDED',
  COPY_EXPENSE_STARTED = 'COPY_EXPENSE_STARTED',
  COPY_EXPENSE_SUCCEEDED = 'COPY_EXPENSE_SUCCEEDED',
  REMOVE_EXPENSE_STARTED = 'REMOVE_EXPENSE_STARTED',
  REMOVE_EXPENSE_SUCCEEDED = 'REMOVE_EXPENSE_SUCCEEDED',
  LOAD_EXPENSES_STARTED = 'LOAD_EXPENSES_STARTED',
  LOAD_EXPENSES_SUCCEEDED = 'LOAD_EXPENSES_SUCCEEDED',
}

interface FetchExpensesAction {
  type: ExpensesActionTypes.LOAD_EXPENSES_STARTED
}

interface FetchExpensesSucceededAction {
  type: ExpensesActionTypes.LOAD_EXPENSES_SUCCEEDED
  payload: any[]
}

interface CopyExpenseAction {
  type: ExpensesActionTypes.COPY_EXPENSE_STARTED
  payload: string
}

interface CopyExpenseSucceededAction {
  type: ExpensesActionTypes.COPY_EXPENSE_SUCCEEDED
  payload: {
    id: string
    newElemId: string
  }
}

interface DeleteExpenseAction {
  type: ExpensesActionTypes.REMOVE_EXPENSE_STARTED
  payload: string
}

interface DeleteExpenseSucceededAction {
  type: ExpensesActionTypes.REMOVE_EXPENSE_SUCCEEDED
  payload: string
}

interface AddExpenseAction {
  type: ExpensesActionTypes.ADD_EXPENSE_STARTED
}

interface AddExpenseSucceededAction {
  type: ExpensesActionTypes.ADD_EXPENSE_SUCCEEDED,
  payload: {
    sum: string
    date: string
    comment: string
    categoryId: string
    id: string
  }
}

export type ExpensesAction =
  | FetchExpensesAction
  | FetchExpensesSucceededAction
  | CopyExpenseAction
  | CopyExpenseSucceededAction
  | DeleteExpenseAction
  | DeleteExpenseSucceededAction
  | AddExpenseAction
  | AddExpenseSucceededAction
