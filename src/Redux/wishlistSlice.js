// /Redux/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // قائمة المنتجات المفضلة
  count: 0,  // عدد المنتجات (لعرضه في Navbar)
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // دالة لإضافة أو إزالة منتج من المفضلة
    toggleWishlistItem: (state, action) => {
      const newItem = action.payload; // Product object
      const existingIndex = state.items.findIndex(item => item.id === newItem.id);

      if (existingIndex >= 0) {
        // إذا كان المنتج موجودًا بالفعل (إزالة)
        state.items.splice(existingIndex, 1);
        state.count--;
      } else {
        // إذا لم يكن موجودًا (إضافة)
        state.items.push(newItem);
        state.count++;
      }
    },
    // دالة لإزالة جميع العناصر (إذا لزم الأمر)
    clearWishlist: (state) => {
        state.items = [];
        state.count = 0;
    }
  },
});

export const { toggleWishlistItem, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;