export interface CategoriesState {
  items: any[],
  loading: boolean,
  editing: boolean,
  adding: boolean,
  deleting: any,
}

export enum CategoriesActionTypes {
  ADD_CATEGORY_STARTED = 'ADD_CATEGORY_STARTED',
  ADD_CATEGORY_SUCCEEDED = 'ADD_CATEGORY_SUCCEEDED',
  REMOVE_CATEGORY_STARTED = 'REMOVE_CATEGORY_STARTED',
  REMOVE_CATEGORY_SUCCEEDED = 'REMOVE_CATEGORY_SUCCEEDED',
  EDIT_CATEGORY_STARTED = 'EDIT_CATEGORY_STARTED',
  EDIT_CATEGORY_SUCCEEDED = 'EDIT_CATEGORY_SUCCEEDED',
  LOAD_CATEGORIES_STARTED = 'LOAD_CATEGORIES_STARTED',
  LOAD_CATEGORIES_SUCCEEDED = 'LOAD_CATEGORIES_SUCCEEDED',
}

interface FetchCategoriesAction {
  type: CategoriesActionTypes.LOAD_CATEGORIES_STARTED
}

interface FetchCategoriesSucceededAction {
  type: CategoriesActionTypes.LOAD_CATEGORIES_SUCCEEDED
  payload: any[]
}

interface AddCategoriesAction {
  type: CategoriesActionTypes.ADD_CATEGORY_STARTED
}

interface AddCategoriesSucceededAction {
  type: CategoriesActionTypes.ADD_CATEGORY_SUCCEEDED
  payload: {
    id: string
    text: string
  }
}

interface DeleteCategoriesAction {
  type: CategoriesActionTypes.REMOVE_CATEGORY_STARTED
  payload: string
}

interface DeleteCategoriesSucceededAction {
  type: CategoriesActionTypes.REMOVE_CATEGORY_SUCCEEDED
  payload: string
}

interface EditCategoriesAction {
  type: CategoriesActionTypes.EDIT_CATEGORY_STARTED
}

interface EditCategoriesSucceededAction {
  type: CategoriesActionTypes.EDIT_CATEGORY_SUCCEEDED
  payload: { id: string, text: string }
}

export type CategoriesAction =
  | FetchCategoriesAction
  | FetchCategoriesSucceededAction
  | AddCategoriesAction
  | AddCategoriesSucceededAction
  | DeleteCategoriesAction
  | DeleteCategoriesSucceededAction
  | EditCategoriesAction
  | EditCategoriesSucceededAction