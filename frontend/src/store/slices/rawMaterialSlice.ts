import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as rawMaterialService from "../../service/rawMaterialService";
import type { RawMaterialResponseType } from "../../types/rawMaterial";

interface State {
  items: RawMaterialResponseType[];
  loading: boolean;
}

const initialState: State = {
  items: [],
  loading: false,
};

export const fetchRawMaterials = createAsyncThunk(
  "rawMaterials/fetchAll",
  rawMaterialService.getAllRawMaterials
);

const slice = createSlice({
  name: "rawMaterials",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRawMaterials.pending, s => {
        s.loading = true;
      })
      .addCase(fetchRawMaterials.fulfilled, (s, a) => {
        s.loading = false;
        s.items = a.payload;
      });
  },
});

export default slice.reducer;
