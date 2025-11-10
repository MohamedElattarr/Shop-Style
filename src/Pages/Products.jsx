import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice'; // تأكد من المسار الصحيح
import { toggleWishlistItem } from '../Redux/wishlistSlice'; // 🆕 استيراد الدالة
import Alert from '../Components/Alert'; // 🆕 استيراد مكوّن التنبيه

 

// 💡 Mock Data: Replace this with data fetched from an API or Redux store
const featuredItems = [
  { 
    id: 1, 
    name: "Classic Leather Satchel", 
    price: 129.99, 
    image: "src/assets/tobias-tullius-Fg15LdqpWrs-unsplash (1).jpg", 
    link: "/product/1" 
  },
  { 
    id: 2, 
    name: "Ceramic Coffee Mug Set", 
    price: 34.99, 
    image: "src/assets/pinho-GCAnKZM21_c-unsplash.jpg", 
    link: "/product/4" 
  },
  { 
    id: 3, 
    name: "Classic Leather Satchel", 
    price: 129.99, 
    image: "src/assets/tobias-tullius-Fg15LdqpWrs-unsplash (1).jpg", 
    link: "/product/1" 
  },
  { 
    id: 4, 
    name: "Minimalist Gold Watch", 
    price: 89.50, 
    image: "src/assets/cgxl-media-92_tCTr9rtw-unsplash.jpg", 
    link: "/product/2" 
  },
  { 
    id: 5, 
    name: "Minimalist Gold Watch", 
    price: 89.50, 
    image: "src/assets/adrian-ordonez-P0W27GRvyww-unsplash.jpg", 
    link: "/product/2" 
  },
  { 
    id: 6, 
    name: "Organic Cotton Hoodie", 
    price: 55.00, 
    image: "src/assets/cgxl-media-92_tCTr9rtw-unsplash.jpg", 
    link: "/product/3" 
  },
  
  { 
    id: 7, 
    name: "Classic Leather Satchel", 
    price: 129.99, 
    image: "src/assets/tobias-tullius-Fg15LdqpWrs-unsplash (1).jpg", 
    link: "/product/1" 
  },
  { 
    id: 8, 
    name: "Minimalist Gold Watch", 
    price: 89.50, 
    image: "src/assets/adrian-ordonez-P0W27GRvyww-unsplash.jpg", 
    link: "/product/2" 
  },
  { 
    id: 9, 
    name: "Organic Cotton Hoodie", 
    price: 55.00, 
    image: "src/assets/cgxl-media-92_tCTr9rtw-unsplash.jpg", 
    link: "/product/3" 
  },
  { 
    id: 10, 
    name: "Ceramic Coffee Mug Set", 
    price: 34.99, 
    image: "src/assets/pinho-GCAnKZM21_c-unsplash.jpg", 
    link: "/product/4" 
  },
  { 
    id: 11, 
    name: "Minimalist Gold Watch", 
    price: 89.50, 
    image: "src/assets/adrian-ordonez-P0W27GRvyww-unsplash.jpg", 
    link: "/product/2" 
  },
  { 
    id: 12, 
    name: "Minimalist Gold Watch", 
    price: 89.50, 
    image: "src/assets/cgxl-media-92_tCTr9rtw-unsplash.jpg", 
    link: "/product/2" 
  },
];

const FeaturedProducts = () => {
   const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // يجب أن تكون الدالة هكذا
    dispatch(addItemToCart(product)); 
  };

  const wishlistItems = useSelector(state => state.wishlist.items);

  const handleToggleWishlist = (product) => {
    dispatch(toggleWishlistItem(product));
    
    // تحديد ما إذا كان المنتج تمت إضافته أو إزالته
    const isNowLiked = !wishlistItems.some(item => item.id === product.id);
    
    setAlert({
      message: isNowLiked ? `${product.name} added to Wishlist ${icon.wishlist}` : `${product.name} removed from Wishlist`,
      type: 'wishlist'
    });
    
    // إخفاء التنبيه بعد 3 ثواني
    setTimeout(() => setAlert(null), 3000);
  };
  
  // دالة لمعرفة حالة القلب (ممتلئ أم فارغ)
  const isProductLiked = (productId) => {
      return wishlistItems.some(item => item.id === productId);
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      
      {/* Section Header */}
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-600 mb-12">
        Products
      </h2>
      
      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {featuredItems.map((product) => (
          
          /* Single Product Card */
          <div 
            key={product.id} 
            className="bg-white dark:bg-gray-600 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
          >
            
            {/* Product Image */}
            <a href={product.link} aria-label={`View ${product.name}`}>
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition duration-500 group-hover:opacity-75"
                />
              </div>
            </a>
            
            {/* Product Details */}
            <div className="p-4 flex flex-col items-center text-center">
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate w-full">
                {product.name}
              </h3>
              
              <p className="text-xl font-bold text-pink-600 dark:text-pink-500 mb-3">
                ${product.price.toFixed(2)}
              </p>
              
              {/* Add to Cart Button */}
              <button 
                // 💡 In a real app, this would trigger an addToCart function
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 
                           font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 
                           dark:focus:ring-blue-800 transition-colors"
                           onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button 
                    onClick={(e) => { e.preventDefault(); handleToggleWishlist(product); }}
                    className="absolute top-3 right-3 p-2 bg-gray-900 rounded-full shadow-lg transition-colors hover:bg-gray-900"
                >
                    <svg className={`w-6 h-6 ${isProductLiked(product.id) ? 'text-pink-600 fill-pink-600' : 'text-gray-400'}`} 
                         fill={isProductLiked(product.id) ? 'currentColor' : 'none'} 
                         stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 19l-7.318-7.318a4.5 4.5 0 010-6.364z"/>
                    </svg>
                </button>
              
            </div>
          </div>
        ))}
      </div>
      
     
    </section>
  );
};

export default FeaturedProducts;