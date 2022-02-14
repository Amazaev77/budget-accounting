import { Dispatch } from "redux"
import { CategoriesAction, CategoriesActionTypes } from "../types/categories"
import axios from "axios"

const api = 'https://budget-1b5bd-default-rtdb.firebaseio.com/'

export const loadCategories = () => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    dispatch({ type: CategoriesActionTypes.LOAD_CATEGORIES_STARTED })

    const { data } = await axios.get(api + '/categories.json')

    dispatch({
      type: CategoriesActionTypes.LOAD_CATEGORIES_SUCCEEDED,
      payload: Object.keys(data).map(key => ({ ...data[key], id: key }))
    })
  }
}

export const addCategory = (text: string) => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    dispatch({ type: CategoriesActionTypes.ADD_CATEGORY_STARTED })

    const { data } = await axios.post(api + '/categories.json', { text })

    dispatch({
      type: CategoriesActionTypes.ADD_CATEGORY_SUCCEEDED,
      payload: { id: data.name, text }
    })
  }
}

export const removeCategory = (id: string) => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    dispatch({
      type: CategoriesActionTypes.REMOVE_CATEGORY_STARTED,
      payload: id
    })

    await axios.delete(api + `/categories/${id}.json`)

    dispatch({
      type: CategoriesActionTypes.REMOVE_CATEGORY_SUCCEEDED,
      payload: id
    })
  }
}

export const editCategory = (id: string, newValue: string) => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    dispatch({ type: CategoriesActionTypes.EDIT_CATEGORY_STARTED })

    const body = { text: newValue }

    await axios.put(api + `/categories/${id}.json`, body)

    dispatch({
      type: CategoriesActionTypes.EDIT_CATEGORY_SUCCEEDED,
      payload: { id, text: newValue }
    })
  }
}
