import { createSlice } from "@reduxjs/toolkit"
import {
  getBannerAsync,
  getCategoriesAsync,
  getExhibitionAsync,
} from "./homeAsync"
import type {
  Collections,
  BannerResponse,
  CategoriesResponse,
} from "../../types/types"

interface HomeState {
  banner: BannerResponse[]
  category: CategoriesResponse[]
  exhibition: Collections | undefined
  bannerStatus: "idle" | "loading" | "rejected" | "fulfilled"
  shortcutStatus: "idle" | "loading" | "rejected" | "fulfilled"
  exhibitionStatus: "idle" | "loading" | "rejected" | "fulfilled"
  bannerError: string | undefined
  shortcutError: string | undefined
  exhibitionError: string | undefined
}

const initialState: HomeState = {
  banner: [],
  category: [],
  exhibition: undefined,
  bannerStatus: "idle",
  shortcutStatus: "idle",
  exhibitionStatus: "idle",
  bannerError: undefined,
  shortcutError: undefined,
  exhibitionError: undefined,
}

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(getBannerAsync.pending, state => {
        state.bannerStatus = "loading"
      })
      .addCase(getBannerAsync.fulfilled, (state, action) => {
        state.bannerStatus = "fulfilled"
        state.banner = action.payload
      })
      .addCase(getBannerAsync.rejected, (state, action) => {
        state.bannerStatus = "rejected"
        state.bannerError = action.error.message
      })

      .addCase(getCategoriesAsync.pending, state => {
        state.shortcutStatus = "loading"
      })
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.shortcutStatus = "fulfilled"
        state.category = action.payload
      })
      .addCase(getCategoriesAsync.rejected, (state, action) => {
        state.shortcutStatus = "rejected"
        state.shortcutError = action.error.message
      })

      .addCase(getExhibitionAsync.pending, state => {
        state.exhibitionStatus = "loading"
      })
      .addCase(getExhibitionAsync.fulfilled, (state, action) => {
        state.exhibitionStatus = "fulfilled"
        state.exhibition = action.payload
      })
      .addCase(getExhibitionAsync.rejected, (state, action) => {
        state.exhibitionStatus = "rejected"
        state.exhibitionError = action.error.message
      })
  },
})
