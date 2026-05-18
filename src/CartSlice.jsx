import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {

    addItem: (state, action) => {
      const plant = action.payload
      const existingItem = state.items.find(
        (item) => item.name === plant.name
      )
      if (existingItem) {
        // Plant already in cart — increase quantity
        existingItem.quantity++
      } else {
        // Plant not in cart — add it with quantity 1
        state.items.push({ ...plant, quantity: 1 })
      }
    },

    removeItem: (state, action) => {
      // Filter out the item whose name matches
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      )
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload
      const item = state.items.find(
        (item) => item.name === name
      )
      if (item) {
        // Update the quantity of the matching item
        item.quantity = quantity
      }
    },

  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;