import { createAsyncThunk } from "@reduxjs/toolkit"
import {
  getBannerData,
  getCategoriesData,
  getExhibitionData,
} from "../../api/backend"

export const getBannerAsync = createAsyncThunk("Banner", async () => {
  try {
    return await getBannerData()
  } catch (error) {
    console.error(error)
    throw error
  }
})

export const getCategoriesAsync = createAsyncThunk("Categories", async () => {
  try {
    return await getCategoriesData()
  } catch (error) {
    console.error(error)
    throw error
  }
})

export const getExhibitionAsync = createAsyncThunk("Exhibition", async () => {
  try {
    return await getExhibitionData()
  } catch (error) {
    console.error(error)
    throw error
  }
})
