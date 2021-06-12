import { Dispatch } from "redux"
import { ExpensesAction, ExpensesActionTypes } from "../types/expenses"
import { ExpenseType } from "../../components/Expenses/Expense"
import axios from "axios"

const api = 'https://budjet-accounting-27efa-default-rtdb.firebaseio.com'

export const loadExpenses = () => {
  return async (dispatch: Dispatch<ExpensesAction>) => {
    dispatch({ type: ExpensesActionTypes.LOAD_EXPENSES_STARTED })

    const { data } = await axios.get(api + '/expenses.json')

    dispatch({
      type: ExpensesActionTypes.LOAD_EXPENSES_SUCCEEDED,
      payload: Object.keys(data).map(key => ({ ...data[key], id: key }))
    })
  }
}

export const copyExpense = (item: ExpenseType, date: string) => {
  return async (dispatch: Dispatch<ExpensesAction>) => {
    dispatch({
      type: ExpensesActionTypes.COPY_EXPENSE_STARTED,
      payload: item.id
    })

    const body = {
      sum: item.sum,
      comment: item.comment,
      categoryId: item.categoryId,
      date,
    }

    const { data } = await axios.post(api + '/expenses.json', body)

    dispatch({
      type: ExpensesActionTypes.COPY_EXPENSE_SUCCEEDED,
      payload: {
        id: item.id,
        newElemId: data.name
      }
    })
  }
}

export const removeExpense = (id: string) => {
  return async (dispatch: Dispatch<ExpensesAction>) => {
    dispatch({
      type: ExpensesActionTypes.REMOVE_EXPENSE_STARTED,
      payload: id
    })

    await axios.delete(api + `/expenses/${id}.json`)

    dispatch({
      type: ExpensesActionTypes.REMOVE_EXPENSE_SUCCEEDED,
      payload: id
    })
  }
}

export const addExpense = (sum: string, comment: string, categoryId: string, date: string) => {
  return async (dispatch: Dispatch<ExpensesAction>) => {
    dispatch({ type: ExpensesActionTypes.ADD_EXPENSE_STARTED })

    const body = { sum, comment, categoryId, date }

    const { data } = await axios.post(api + '/expenses.json', body)

    dispatch({
      type: ExpensesActionTypes.ADD_EXPENSE_SUCCEEDED,
      payload: { sum, comment, categoryId, date, id: data.name }
    })
  }
}