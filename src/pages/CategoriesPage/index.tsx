import React, { FC } from "react"
import Categories from "../../components/Categories"
import Form from "./Form"
import {
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableCell,
  TableBody,
  Paper,
  makeStyles,
  Box,
} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 370,
    overflowX: "hidden",
  },
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  }
}))

const CategoriesPage: FC = () => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Form />
      <TableContainer component={Paper} className={classes.root} elevation={3}>
        <Table size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.head}>
                Категории
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Categories />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default CategoriesPage
