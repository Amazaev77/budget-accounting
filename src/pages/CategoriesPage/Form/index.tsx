import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Box, Button, makeStyles, TextField } from "@material-ui/core"
import { addCategory } from "../../../redux/actions/categories"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../hooks/useTypedSelector"

const useStyles = makeStyles((theme) => ({
  textField: {
    marginRight: theme.spacing(2)
  },
  form: {
    display: 'flex',
    alignItems: 'center'
  }
}))

const Form: FC = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const [newCategory, setNewCategory] = useState("")

  const handleNewCategory = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(event.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (newCategory.trim()) {
      dispatch(addCategory(newCategory));
      setNewCategory("");
    }
  }

  const adding = useTypedSelector(state => state.categories.adding)

  return (
    <Box mt={1} mb={2} display="flex">
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          size="small"
          label="Новая категория"
          variant="outlined"
          value={newCategory}
          onChange={handleNewCategory}
          className={classes.textField}
          autoComplete="off"
        />
        <Button
          type='submit'
          disabled={adding}
          variant="contained"
          color="secondary"
        >
          Добавить
        </Button>
      </form>
    </Box>
  )
}

export default Form
