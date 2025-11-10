// /Redux/localStorage.js

// 1. تحميل الحالة من localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState'); // المفتاح الذي سنستخدمه
    if (serializedState === null) {
      return undefined; // إذا لم تكن هناك حالة محفوظة، دع Redux يستخدم الحالة الأولية
    }
    return JSON.parse(serializedState); // تحويل النص JSON إلى كائن JavaScript
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }

};

// 2. حفظ الحالة في localStorage
export const saveState = (state) => {
  try {
    // نحتاج فقط لحفظ شريحة 'cart'
    const stateToSave = {
        cart: state.cart,
        wishlist: state.wishlist
    };
    
    const serializedState = JSON.stringify(stateToSave);
    localStorage.setItem('cartState', serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};