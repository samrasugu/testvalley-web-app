import { axiosInstance } from "./http"
import type {
  Collections,
  BannerResponse,
  CategoriesResponse,
} from "../types/types"

export const getBannerData = async () => {
  try {
    const response =
      await axiosInstance.get<BannerResponse[]>("/main-banner/all")

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getCategoriesData = async () => {
  try {
    const response =
      await axiosInstance.get<CategoriesResponse[]>("/main-shortcut/all")

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getExhibitionData = async () => {
  try {
    const response = await axiosInstance.get<Collections>(
      "/collections?prearrangedDiscount",
    )

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
