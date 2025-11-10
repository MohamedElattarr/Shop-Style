import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, adjustQuantity } from '../Redux/cartSlice'; // تأكد من المسار

const CartPage = () => {
  const dispatch = useDispatch();
  // قراءة قائمة العناصر من Redux
  const cartItems = useSelector(state => state.cart.items); 

  // حساب الإجمالي
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  // دالة لزيادة الكمية
  const handleAdjust = (id, adjustment) => {
    dispatch(adjustQuantity({ id, adjustment }));
  };

  // دالة لإزالة المنتج بالكامل
  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };
  
  // إذا كانت السلة فارغة
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center min-h-[60vh]">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-700 mb-4">Your Cart is Empty</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <a 
          href="/" 
          className="inline-block px-8 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full hover:bg-pink-700 transition-colors"
        >
          Start Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-5xl font-extrabold text-center text-gray-600 dark:text-gray mb-12">
        Shopping Cart
      </h1>
      
      {/* شبكة القائمة والإجمالي */}
      <div className="grid md:grid-cols-3 gap-10">
        
        {/* 1. قائمة عناصر السلة */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-white">
              
              {/* صورة المنتج */}
              <img 
                src={item.image || 'https://via.placeholder.com/80'} // استخدم صورة المنتج الفعلية
                alt={item.name} 
                className="w-20 h-20 object-cover rounded-lg mr-6"
              />
              
              <div className="">
                {/* اسم المنتج والسعر */}
                <h3 className="text-xl font-semibold text-gray-300 dark:text-white">{item.name}</h3>
                <p className="text-lg text-pink-600 dark:text-pink-500">${item.price.toFixed(2)}</p>
              </div>
              
              {/* أدوات التحكم في الكمية */}
              <div className="flex items-center space-x-2 mx-4">
                <button 
                  onClick={() => handleAdjust(item.id, -1)}
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded text-gray-300 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-medium text-white w-8 text-center">{item.quantity}</span>
                <button 
                  onClick={() => handleAdjust(item.id, 1)}
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  +
                </button>
              </div>
              
              {/* إجمالي سعر المنتج */}
              <div className="w-24 text-right">
                <p className="text-lg font-bold text-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              {/* زر الإزالة */}
              <button 
                onClick={() => handleRemove(item.id)}
                className="ml-6 text-red-500 hover:text-red-700 p-2"
                title="Remove Item"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
          ))}
        </div>
        
        {/* 2. ملخص الطلب (Order Summary) */}
        <div className="md:col-span-1 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner h-fit sticky top-24">
          <h2 className="text-3xl font-bold text-gray-400 dark:text-white mb-6">Order Summary</h2>
          
          <div className="space-y-4 text-lg">
            <div className="flex justify-between border-b pb-2">
              <span className='text-gray-300' >Items Subtotal:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between border-b pb-2">
              <span className='text-gray-300' >Shipping:</span>
              <span className="text-green-600">Free</span>
            </div>
            
            <div className="flex justify-between pt-4 text-xl font-extrabold">
              <span className='text-gray-300' >Order Total:</span>
              <span className="text-pink-600">${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
          
          {/* زر الدفع */}
          <button 
            className="mt-8 w-full py-3 bg-pink-600 text-white text-xl font-semibold rounded-lg hover:bg-pink-700 transition-colors shadow-lg"
          >
            Proceed to Checkout
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default CartPage;