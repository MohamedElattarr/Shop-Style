// /Redux/store.js (المُعدَّل باستخدام الطريقة اليدوية)
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';
// 🆕 استيراد دوال localStorage
import { loadState, saveState } from './localStorage'; 



// 1. تحميل الحالة المحفوظة (إن وجدت)
const preloadedState = loadState();


// 2. إنشاء Middleware مخصص للحفظ
const localStorageMiddleware = store => next => action => {
  // تمرير الإجراء (Action) أولاً لتحديث الحالة
  const result = next(action);
  
  // حفظ الحالة الجديدة في localStorage بعد كل إجراء (Action)
  saveState(store.getState());

  return result;
};


// 3. تكوين المتجر (Store)
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  // 🆕 استخدام الحالة المحملة
  preloadedState, 
  // 🆕 إضافة الـ Middleware المخصص للحفظ
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(localStorageMiddleware),
});