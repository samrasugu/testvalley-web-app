import { useEffect, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import Banner from "./components/Banner"
import Categories from "./components/Categories"
import { getExhibitionAsync } from "./homeAsync"
import { ProductList } from "./components/ProductList"

export const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const { exhibition } = useAppSelector(state => state.home)
  useEffect(() => {
    dispatch(getExhibitionAsync())
  }, [dispatch])

  const single = useMemo(() => {
    return exhibition?.items.filter(
      item => item.type === "SINGLE" && item.viewType === "TILE",
    )
  }, [exhibition])

  return (
    <>
      <Banner />
      <Categories />
      {single &&
        single.map(item => {
          return <ProductList items={item} key={item.id} />
        })}
    </>
  )
}
