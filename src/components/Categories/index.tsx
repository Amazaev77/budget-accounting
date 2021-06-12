import React, { FC, useEffect } from "react"
import Category from "./Category"
import SkeletonBox from "./SkeletonBox"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useDispatch } from "react-redux"
import { loadCategories } from "../../redux/actions/categories"

const Categories: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCategories())
  }, [dispatch])

  const categories = useTypedSelector((state) => state.categories.items)
  const loading = useTypedSelector((state) => state.categories.loading)

  if (loading) {
    return <SkeletonBox />
  }

  return <>
    {categories.map((category) => (
      <Category key={category.id} category={category} />
    ))}
  </>
}

export default Categories
