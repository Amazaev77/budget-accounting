import React, { FC, useEffect } from 'react'
import { useTypedSelector } from "../../hooks/useTypedSelector"
import PreloaderToTable from "./PreloaderToTable"
import Expense from "./Expense"
import { useDispatch } from "react-redux"
import { loadExpenses } from "../../redux/actions/expenses"
import { loadCategories } from "../../redux/actions/categories"

const Expenses: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCategories())
    dispatch(loadExpenses())
  }, [dispatch])

  const expenses = useTypedSelector((state) => state.expenses.items);
  const loading = useTypedSelector((state) => state.expenses.loading);

  const preloader = new Array(3)
    .fill('')
    .map((_, idx) => <PreloaderToTable key={idx} />)

  if (loading) {
    return <>{preloader}</>
  }

  return <>
    {expenses.map((expense) => (
      <Expense
        key={expense.id}
        expense={expense}
      />
    ))}
  </>
}

export default Expenses
