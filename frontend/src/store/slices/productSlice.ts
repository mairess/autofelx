
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { ProductResponseType, ProductCreationType } from "../../types/product";
import * as productService from "../../service/productService";

interface ProductState {
  items: ProductResponseType[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    return await productService.getAllProducts();
  }
);

export const createProduct = createAsyncThunk(
  "products/create",
  async (data: ProductCreationType) => {
    return await productService.createProduct(data);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error loading products";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default productSlice.reducer;
