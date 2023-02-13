import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Page2Data,
  Section,
  Slide,
} from "../../utils/interfaces/data.interface";
import HomeApi from "../../utils/apis/home.api";

const initialState = {
  carouselData: [] as Slide[],
  sectionsData: [] as Section[],
  pageData: {} as Page2Data,
  carouselLoadingStatus: "idle",
  sectionsLoadingStatus: "idle",
  pageLoadingStatus: "idle",
  carouselError: null,
  sectionsError: null,
  pageError: null,
};

export const fetchcarousel = createAsyncThunk(
  "appData/fetchcarousel",
  async (url: string) => {
    // Fetch the backend endpoint:
    const response = await HomeApi.get(url);
    return response.data.data;
  }
);

export const fetchSections = createAsyncThunk(
  "appData/fetchSections",
  async (url: string) => {
    // Fetch the backend endpoint:
    const response = await HomeApi.get(url);
    return response.data.data;
  }
);

export const fetchPage = createAsyncThunk(
  "appData/fetchPage",
  async (url: string) => {
    // Fetch the backend endpoint:
    const response = await HomeApi.get(url);
    return response.data.data;
  }
);

export const storeDataSlice = createSlice({
  name: "storeData",
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder
      .addCase(fetchcarousel.pending, (state: any) => {
        state.carouselLoadingStatus = "loading";
      })
      .addCase(fetchcarousel.fulfilled, (state: any, action: any) => {
        state.carouselLoadingStatus = "succeeded";
        state.carouselData = action.payload;
      })
      .addCase(fetchcarousel.rejected, (state: any, action: any) => {
        state.carouselLoadingStatus = "failed";
        state.carouselError = action.error.message;
      })
      .addCase(fetchSections.pending, (state: any) => {
        state.sectionsLoadingStatus = "loading";
      })
      .addCase(fetchSections.fulfilled, (state: any, action: any) => {
        state.sectionsLoadingStatus = "succeeded";
        state.sectionsData = action.payload;
      })
      .addCase(fetchSections.rejected, (state: any, action: any) => {
        state.sectionsLoadingStatus = "failed";
        state.sectionsError = action.error.message;
      })
      .addCase(fetchPage.pending, (state: any) => {
        state.pageLoadingStatus = "loading";
      })
      .addCase(fetchPage.fulfilled, (state: any, action: any) => {
        state.pageLoadingStatus = "succeeded";
        state.pageData = action.payload;
      })
      .addCase(fetchPage.rejected, (state: any, action: any) => {
        state.pageLoadingStatus = "failed";
        state.pageError = action.error.message;
      });
  },
});

export const selectCarouselLoadingStatus = (state: any) =>
  state.carouselLoadingStatus;

export const selectSection1LoadingStatus = (state: any) =>
  state.sectionOneLoadingStatus;

export const selectPageLoadingStatus = (state: any) => state.pageLoadingStatus;

export default storeDataSlice.reducer;
