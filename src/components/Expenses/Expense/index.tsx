import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { copyExpense, removeExpense } from "../../../redux/actions/expenses"
import { IconButton, TableRow, TableCell } from "@material-ui/core"
import moment from "moment"
import "moment/locale/ru"
import DeleteIcon from "@material-ui/icons/Delete"
import FileCopyIcon from "@material-ui/icons/FileCopy"

moment.locale("ru")

export type ExpenseType = {
  sum: string
  date: string
  comment: string
  categoryId: string
  id: string
}

type PropsType = {
  expense: ExpenseType
}

const Expense: FC<PropsType> = ({ expense }) => {
  const dispatch = useDispatch()

  const category = useTypedSelector((state) =>
    state.categories.items.find(
      (category) => expense.categoryId === category.id
    )
  )

  const deleting = useTypedSelector((state) => state.expenses.deleting)
  const copying = useTypedSelector((state) => state.expenses.copying)

  const deleteExpenseHandler = () => {
    dispatch(removeExpense(expense.id))
  }

  const handleCopyExpense = () => {
    dispatch(copyExpense(expense, moment().format()))
  }

  return (
    <TableRow>
      <TableCell>{category?.text}</TableCell>
      <TableCell>{expense.sum} руб</TableCell>
      <TableCell>{moment(expense.date).format("L / LT")}</TableCell>
      <TableCell>{expense.comment}</TableCell>
      <TableCell>
        <IconButton
          color="secondary"
          aria-label="delete"
          onClick={deleteExpenseHandler}
          disabled={deleting === expense.id}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={handleCopyExpense}
          disabled={copying === expense.id}
        >
          <FileCopyIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default Expense
