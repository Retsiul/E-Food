import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItems = {
  id: number;
  nome: string;
  foto: string;
  preco: number;
};

type CartState = {
  items: CartItems[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItems>) => {
      const itemExiste = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (!itemExiste) {
        state.items.push(action.payload);
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    open: (state) => {
      state.isOpen = true;
    },

    close: (state) => {
      state.isOpen = false;
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, open, close, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
