import React, { ChangeEvent, FC, useState, KeyboardEvent } from "react"
import {
  makeStyles,
  TableRow,
  TableCell,
  IconButton,
  Input,
  Box,
} from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import { useDispatch } from "react-redux"
import { editCategory } from "../../../redux/actions/categories"
import RemoveIcon from "./RemoveIcon"

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.success.main,
  },
}));

type PropsType = {
  category: {
    id: string
    text: string
  }
}

const Category: FC<PropsType> = ({ category }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [showEditInput, setShowEditInput] = useState(false)
  const [newValueCategory, setNewValueCategory] = useState(category.text)

  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setNewValueCategory(e.target.value)
  };

  const handleShowEditInput = () => {
    setShowEditInput(true)
  };

  const handleEditCategory = () => {
    if (category.text !== newValueCategory) {
      dispatch(editCategory(category.id, newValueCategory))
    }
    setShowEditInput(false)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleEditCategory()
    }
  }

  return (
    <TableRow>
      <TableCell>
        <Box display="flex" justifyContent="space-between">
          <Box alignSelf="center">
            {!showEditInput && category.text}
            {showEditInput && (
              <Input
                onBlur={handleEditCategory}
                value={newValueCategory}
                onKeyDown={handleKeyDown}
                onChange={handleChangeCategory}
                placeholder="Новое значение"
                autoFocus
              />
            )}
          </Box>
          <Box>
            <IconButton
              aria-label="delete"
              disabled={showEditInput}
              onClick={handleShowEditInput}
              className={classes.root}
            >
              <EditIcon />
            </IconButton>
            <RemoveIcon categoryId={category.id} />
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  )
}

export default Category
