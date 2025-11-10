
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from './Pages/Cart';

const Navbar = () => {
  const cartCount = useSelector(state => state.cart.totalQuantity);
  
  // حالة لإدارة قائمة الهاتف (البرجر)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // حالة لإدارة القائمة المنسدلة "Products"
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // دالة لتبديل قائمة الهاتف
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // إغلاق القائمة المنسدلة عند تبديل قائمة الهاتف
    setIsDropdownOpen(false);
  };
  
  // دالة لتبديل القائمة المنسدلة
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // كلاسات الروابط المشتركة (لتجنب التكرار)
  const baseLinkClasses = "block py-2 pr-4 pl-3 md:p-0 font-medium transition-colors duration-200";
  
  // دالة لتحديد كلاس الرابط النشط
  const getNavLinkClass = ({ isActive }) => {
    return `${baseLinkClasses} ${
      isActive 
        ? 'text-blue-600 dark:text-blue-500' // الستايل عند التفعيل
        : 'text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500' // الستايل العادي
    }`;
  };
  const wishlistCount = useSelector(state => state.wishlist.count);
  

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md w-full z-30 transition-transform duration-500 ease-in-out
    ${isScrolled
    ?'fixed top-0 transform translate-y-0' // Slide down/fixed position 
    : 'relative md:fixed md-topo-0 md-transform md:-translate-y-full'
  }
    ">
      <div className="flex flex-wrap justify-between items-center mx-auto  p-4">
        {/* شعار الموقع (ShopStyle) */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
            ShopStyle
          </span>
        </NavLink>
        
        {/* أيقونات جانبية (سلة المشتريات والقلب) */}
        <div className="flex items-center space-x-3 md:order-2 rtl:space-x-reverse">

{/* Existing Heart Icon Button */}
<NavLink to="/wishlist" className="relative text-gray-400 hover:text-white p-2.5 rounded-lg">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 19l-7.318-7.318a4.5 4.5 0 010-6.364z"/></svg>
    {/* 🆕 Badge للمفضلة */}
    {wishlistCount > 0 && (
      <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 
                     inline-flex items-center justify-center 
                     h-4 w-4 text-xs font-bold leading-none text-white 
                     bg-pink-600 rounded-full ring-2 ring-gray-900">
          {wishlistCount} 
      </span>
    )}
</NavLink>

{/* 🛒 Cart Button with Relative Positioning */}

<NavLink to="/cart"
className="relative text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2.5">
    {/* SVG for Cart */}
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zM8 20a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    <span className="sr-only">{cartCount}</span>

    {/* 🔴 The Badge: Absolute Positioning */}
    <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 
                   inline-flex items-center justify-center 
                   h-5 w-5 p-1 
                   text-xs font-bold leading-none text-white 
                   bg-[#369399] rounded-full ring-2 ring-gray-900 dark:ring-gray-900">
        {cartCount} {/* Replace 0 with your cart count state (e.g., {cartCount}) */}
    </span>
</NavLink>

{/* Existing User/Profile Icon Button */}
<button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2.5">
    {/* SVG for User */}
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" />
    </svg>
</button>

{/* ... Existing Hamburger Menu Button */}
          
          {/* زر قائمة الهاتف (Burger Menu) */}
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        {/* قائمة الروابط الرئيسية وقائمة الهاتف */}
        <div 
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} 
          id="mega-menu"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 rtl:space-x-reverse">
            {/* 1. Home Link */}
            <li>
              <NavLink to="/" className={getNavLinkClass} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={getNavLinkClass}>
                Products
              </NavLink>
            </li>
            
            {/* 2. About Link */}
            <li>
              <NavLink to="/about" className={getNavLinkClass}>
                About
              </NavLink>
            </li>
            
            
            
            {/* 4. Contact Link */}
            <li>
              <NavLink to="/contact" className={getNavLinkClass}>
                Contact
              </NavLink>
            </li>

    
<li>
{/* حقل البحث الرئيسي (يظهر على الشاشات الكبيرة) */}
<div className="relative hidden md:block md:order-1 flex-1 max-w-xs mx-4 ml-0">
    {/* نستخدم نفس الكود من المكون SearchInput.jsx هنا */}
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
    </div>
    <input 
        type="text" 
        id="search-navbar" 
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search products..." 
    />
</div>
</li>



            {/* حقل البحث يظهر على الهاتف */}
            <li className="md:hidden mt-4">
               <input type="text" placeholder="Search products..." className="w-full p-2 border rounded-lg bg-white"/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
