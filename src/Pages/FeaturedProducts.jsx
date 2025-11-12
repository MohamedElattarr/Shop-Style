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
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", 
    link: "/product/1" 
  },
  { 
    id: 2, 
    name: "Ceramic Coffee Mug Set", 
    price: 34.99, 
    image: "https://images.unsplash.com/photo-1499971856191-1a420a42b498?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500", 
    link: "/product/4" 
  },
  { 
    id: 3, 
    name: "Classic Leather Satchel", 
    price: 129.99, 
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500", 
    link: "/product/1" 
  },
  { 
    id: 4, 
    name: "Minimalist Gold Watch", 
    price: 89.50, 
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", 
    link: "/product/2" 
  },
  { 
    id: 5, 
    name: "Minimalist Gold Watch", 
    price: 89.50, 
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", 
    link: "/product/2" 
  },
  { 
    id: 6, 
    name: "Organic Cotton Hoodie", 
    price: 55.00, 
    image: "https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", 
    link: "/product/3" 
  },
  
  { 
    id: 7, 
    name: "Classic Leather Satchel", 
    price: 129.99, 
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", 
    link: "/product/1" 
  },
  { 
    id: 8, 
    name: "Minimalist Gold Watch", 
    price: 89.50, 
    image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", 
    link: "/product/2" 
  },
  { 
    id: 9, 
    name: "Organic Cotton Hoodie", 
    price: 55.00, 
    image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500", 
    link: "/product/3" 
  },
  { 
    id: 10, 
    name: "Ceramic Coffee Mug Set", 
    price: 34.99, 
    image: "https://images.unsplash.com/photo-1706765779494-2705542ebe74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500", 
    link: "/product/4" 
  },
  { 
    id: 11, 
    name: "Minimalist Gold Watch", 
    price: 89.50, 
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", 
    link: "/product/2" 
  },
  { 
    id: 12, 
    name: "Minimalist Gold Watch", 
    price: 89.50, 
    image: "https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", 
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
         Featured Products
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
              
              
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Button */}
      <div className="text-center mt-12">
        <a 
          href="/products" 
          className="inline-block px-10 py-3 text-lg font-semibold border-2 border-pink-600 text-pink-600 rounded-full 
                     hover:bg-pink-600 hover:text-white transition-colors duration-300"
        >
          View All Products
        </a>
      </div>
    </section>
  );
};

export default FeaturedProducts;