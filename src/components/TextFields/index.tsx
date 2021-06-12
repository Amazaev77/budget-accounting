import React, { ChangeEvent, FC, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import CancelIcon from "@material-ui/icons/Cancel"
import moment from "moment"
import Box from "@material-ui/core/Box"
import {
  makeStyles,
  TextField,
  Button,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { addExpense } from "../../redux/actions/expenses"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& div': {
      marginRight: theme.spacing(1)
    },
    "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none"
    },
    "& input[type='number']": {
      "-moz-appearance": "textfield"
    }
  },
  form: {
    display: 'flex',
  },
  formControl: {
    flexGrow: 2,
    marginRight: theme.spacing(1)
  },
  cancelIcon: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
    marginLeft: theme.spacing(1)
  },
}))

type PropsType = {
  handleShowTextFields: () => void
}

const TextFields: FC<PropsType> = ({ handleShowTextFields }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [sum, setSum] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const [categoryId, setCategoryId] = useState<string>("")

  const handleChangeSum = (e: ChangeEvent<HTMLInputElement>) => {
    setSum(e.target.value)
  }

  const handleChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const handleChangeCategoryId = (e: React.ChangeEvent<{ value: unknown }>) => {
    setCategoryId(e.target.value as string)
  }

  const categories = useTypedSelector((state) => state.categories.items);
  const adding = useTypedSelector((state) => state.expenses.adding);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const date = moment().format()

    if (comment && sum && categoryId) {
      dispatch(addExpense(sum, comment, categoryId, date))

      setSum("")
      setComment("")
      setCategoryId("")
    }
  }

  return (
    <Box mt={2}>
      <form
        onSubmit={onSubmit}
        className={classes.form}
        noValidate autoComplete="off"
      >
        <TextField
          className={classes.root}
          label="Сумма"
          variant="outlined"
          size="small"
          value={sum}
          type="number"
          onChange={handleChangeSum}
        />
        <TextField
          className={classes.root}
          label="На что потрачено"
          variant="outlined"
          size="small"
          value={comment}
          onChange={handleChangeComment}
        />
        <FormControl size="small" variant="outlined" className={classes.formControl}>
          <InputLabel>
            Выберите категорию
          </InputLabel>
          <Select
            native
            label="Выберите категорию"
            value={categoryId}
            onChange={handleChangeCategoryId}
            inputProps={{
              name: 'Выберите категорию',
              id: 'select',
            }}
          >
            <option />
            {categories.map(({ id, text }) => (
              <option key={id} value={id}>
                {text}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button disabled={adding} type='submit' variant="contained" color="primary">
          Добавить
        </Button>
        <Box display="flex" alignItems="center">
          <CancelIcon
            onClick={handleShowTextFields}
            className={classes.cancelIcon}
            color="secondary"
          />
        </Box>
      </form>
    </Box>
  )
}

export default TextFields
