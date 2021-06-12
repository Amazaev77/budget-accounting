import React, { FC, memo } from 'react'
import DeleteIcon from "@material-ui/icons/Delete"
import { IconButton } from "@material-ui/core"
import { removeCategory } from "../../../../redux/actions/categories"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../../hooks/useTypedSelector"

type PropsType = {
  categoryId: string
}

const RemoveIcon: FC<PropsType> = ({ categoryId }) => {
  const dispatch = useDispatch()

  const handleRemoveCategory = () => {
    dispatch(removeCategory(categoryId))
  }

  const deleting = useTypedSelector(state => state.categories.deleting)

  return (
    <IconButton
      color="secondary"
      aria-label="delete"
      onClick={handleRemoveCategory}
      disabled={deleting === categoryId}
    >
      <DeleteIcon />
    </IconButton>
  )
}

export default memo(RemoveIcon)
