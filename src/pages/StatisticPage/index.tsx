import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import moment from "moment";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import StatisticTable from './StatisticTable'
import { loadExpenses } from '../../redux/actions/expenses'
import { loadCategories } from '../../redux/actions/categories'
import { useTypedSelector } from "../../hooks/useTypedSelector"

const useStyles = makeStyles((theme) => ({
  body1: {
    paddingTop: theme.spacing(1.8),
    paddingBottom: theme.spacing(1.8),
  },
  h5: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    borderRadius: "4px",
    textAlign: 'center'
  },
}))

const StatisticPage: FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadExpenses())
    dispatch(loadCategories())
  },[dispatch])

  const expenses = useTypedSelector((state) => state.expenses.items)

  const monthlyExpenses = expenses.reduce((accum, expense) => {
    const thisMonth = moment().format("MMMM")
    const monthFromExpense = moment(expense.date).format("MMMM")

    if (monthFromExpense === thisMonth) {
      accum += expense.sum;
    }

    return accum;
  }, 0)

  const allExpenses = expenses.reduce((accum, expense) => {
    accum += expense.sum;

    return accum;
  }, 0)

  return (
    <>
      <Grid container justify="center" spacing={2}>
        <Grid item md={3} xs={12} sm={5}>
          <Typography
            variant="h5"
            className={`${classes.body1} ${classes.h5}`}
          >
            расходы за этот месяц
          </Typography>
          <Box border={1} borderRadius="borderRadius">
            <Typography align="center" variant="h6" className={classes.body1}>
              {monthlyExpenses} рублей
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3} xs={12} sm={5}>
          <Typography
            variant="h5"
            className={`${classes.body1} ${classes.h5}`}
          >
            расходы за всё время
          </Typography>
          <Box border={1} borderRadius="borderRadius">
            <Typography align="center" variant="h6" className={classes.body1}>
              {allExpenses} рублей
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <StatisticTable />
    </>
  )
}

export default StatisticPage
