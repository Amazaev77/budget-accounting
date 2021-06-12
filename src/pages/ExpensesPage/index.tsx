import React, { FC, useState } from "react"
import AddIcon from "@material-ui/icons/Add"
import {
  Container, makeStyles, TableContainer, Paper, Table,
  TableHead, TableRow, TableBody, TableCell, Fab, Box,
} from "@material-ui/core"
import Expenses from "../../components/Expenses"
import TextFields from "../../components/TextFields"

const useStyles = makeStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  box: {
    display: "flex",
    justifyContent: 'center'
  }
}))

const ExpensesPage: FC = () => {
  const [showTextFields, setShowTextFields] = useState<boolean>(false)

  const handleShowTextFields = () => {
    setShowTextFields(!showTextFields)
  }

  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <TableContainer component={Paper} elevation={3}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>Категория</TableCell>
              <TableCell className={classes.head}>Сумма</TableCell>
              <TableCell className={classes.head}>Время</TableCell>
              <TableCell className={classes.head}>Комментарий</TableCell>
              <TableCell className={classes.head} />
            </TableRow>
          </TableHead>
          <TableBody>
            <Expenses />
          </TableBody>
        </Table>
      </TableContainer>
      {showTextFields && (
        <TextFields handleShowTextFields={handleShowTextFields} />
      )}
      {!showTextFields && (
        <Box className={classes.box} mt={1}>
          <Fab aria-label="add" onClick={handleShowTextFields} color="primary">
            <AddIcon />
          </Fab>
        </Box>
      )}
    </Container>
  )
}

export default ExpensesPage
