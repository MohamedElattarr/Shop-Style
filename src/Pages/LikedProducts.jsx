// Pages/Wishlist.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleWishlistItem } from '../Redux/wishlistSlice'; 
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items); 

  const handleRemove = (product) => {
    dispatch(toggleWishlistItem(product));
  };
  
  const cardClasses = "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl";

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center min-h-[60vh] mt-16 md:mt-24">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Your Wishlist is Empty</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Start exploring our collection and save your favorites!</p>
        <Link 
          to="/" 
          className="inline-block px-8 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full hover:bg-pink-700 transition-colors"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 mt-16 md:mt-0">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        My Wishlist ({wishlistItems.length})
      </h1>
      
      {/* Wishlist Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {wishlistItems.map((product) => (
          <div key={product.id} className={cardClasses}>
            
            <Link to={product.link}>
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img 
                  src={product.image || 'https://via.placeholder.com/300'} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">{product.name}</h3>
              <p className="text-xl font-bold text-pink-600 dark:text-pink-500 mb-3">
                ${product.price.toFixed(2)}
              </p>
              
              {/* Remove Button */}
              <button 
                onClick={() => handleRemove(product)}
                className="w-full text-red-600 border border-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:ring-red-300 
                           font-medium rounded-lg text-sm px-5 py-2 transition-colors"
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;