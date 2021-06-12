import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import expenses from './reducers/expenses'
import categories from './reducers/categories'

const rootReducer = combineReducers({
  expenses,
  categories
})

const logger = createLogger({
  collapsed: true,
  diff: true,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export type RootState = ReturnType<typeof rootReducer>