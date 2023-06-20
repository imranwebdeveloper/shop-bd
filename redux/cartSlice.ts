import { PhoneShortInfo } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { productApi } from "./api";

export interface Cart {
  id: string;
  pcs: number;
}

export interface CartState {
  products: Cart[];
  checkout: PhoneShortInfo[];
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  checkout: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const existProductIndex = state.products.findIndex(
        (p) => p.id === action.payload
      );

      if (existProductIndex !== -1) {
        state.products[existProductIndex].pcs += 1;
      } else {
        state.products.push({ id: action.payload, pcs: 1 });
      }

      localStorage.setItem("shopDBCart", JSON.stringify(state.products));
    },
    addLocalStorageCart: (state, action: PayloadAction<Cart[]>) => {
      state.products = [...action.payload];
    },
    addCheckoutProduct: (state, action: PayloadAction<PhoneShortInfo[]>) => {
      state.checkout = action.payload;
      let totalPrice = 0;
      state.checkout.forEach((item) => {
        totalPrice = totalPrice + item.variants[0].official;
      });
      state.totalPrice = totalPrice;
    },
    removeCartFromCheckout: (state, action: PayloadAction<string>) => {
      state.checkout = state.checkout?.filter(
        (item) => item.id != action.payload
      );
      state.products = state.products.filter(
        (item) => item.id != action.payload
      );
      let totalPrice = 0;
      state.checkout.forEach((item) => {
        totalPrice = totalPrice + item.variants[0].official;
      });
      state.totalPrice = totalPrice;
      localStorage.setItem("shopDBCart", JSON.stringify(state.products));
    },
  },
});

export const {
  addToCart,
  addLocalStorageCart,
  addCheckoutProduct,
  removeCartFromCheckout,
} = cartSlice.actions;
export default cartSlice.reducer;
