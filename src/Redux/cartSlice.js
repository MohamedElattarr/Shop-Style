// /Redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload; 
      const existingItem = state.items.find(item => item.id === newItem.id);

      state.totalQuantity++; 

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          image: newItem.image, 
          quantity: 1, 
        });
      } else {
        existingItem.quantity++;
      }
    },

    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    adjustQuantity: (state, action) => {
      const { id, adjustment } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity += adjustment; 
        existingItem.quantity += adjustment;
        
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, adjustQuantity } = cartSlice.actions;

export default cartSlice.reducer;