import React, { FC } from 'react'
import { Route } from 'react-router-dom'
import ExpensesPage from "./ExpensesPage"
import CategoriesPage from "./CategoriesPage"
import StatisticPage from './StatisticPage'

const Routes: FC = () => {
  return (
    <>
      <Route exact path="/" component={ExpensesPage} />
      <Route exact path="/categories" component={CategoriesPage} />
      <Route exact path="/statistic" component={StatisticPage} />
    </>
  )
}

export default Routes
