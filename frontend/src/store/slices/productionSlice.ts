import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as productionService from "../../service/productionService";
import type { ProductionSuggestionType } from "../../types//production";

interface ProductionState {
  suggestions: ProductionSuggestionType[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductionState = {
  suggestions: [],
  loading: false,
  error: null,
};

export const fetchProductionSuggestion = createAsyncThunk(
  "products/production-suggestions",
  productionService.getProductionSuggestions,
);

const productionSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductionSuggestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductionSuggestion.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestions = action.payload;
      })
      .addCase(fetchProductionSuggestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error loading plan";
      });
  },
});

export default productionSlice.reducer;
