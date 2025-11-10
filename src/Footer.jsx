// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { 
      title: "Quick Links", 
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Shop", path: "/shop" },
      ]
    },
    { 
      title: "Customer Service", 
      links: [
        { name: "FAQ", path: "/faq" },
        { name: "Shipping Policy", path: "/shipping" },
        { name: "Returns & Exchanges", path: "/returns" },
        { name: "Privacy Policy", path: "/privacy" },
      ]
    },
    { 
      title: "My Account", 
      links: [
        { name: "My Cart", path: "/cart" },
        { name: "Wishlist", path: "/wishlist" },
        { name: "Track Order", path: "/track" },
        { name: "Login/Register", path: "/login" },
      ]
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 border-t border-gray-700 dark:border-gray-800">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
          
          {/* 1. Brand Info & Social Media (Span 2 columns on desktop) */}
          <div className="col-span-2 md:col-span-2 space-y-4 pr-6">
            <Link to="/" className="text-3xl font-bold text-pink-500">ShopStyle</Link>
            <p className="text-gray-400 max-w-sm">
              Your ultimate destination for the latest trends in fashion and accessories. Quality and style guaranteed.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 12c.55 0 1 .45 1 1v6h4v-7c0-2.21-1.79-4-4-4h-2V7c0-.55-.45-1-1-1s-1 .45-1 1v2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v2H7c-.55 0-1 .45-1 1v6h4v-6c0-.55.45-1 1-1h2z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4.01c-.88.4-1.83.67-2.82.79.88-.53 1.56-1.37 1.88-2.37-.83.48-1.75.83-2.73 1.02-.78-.83-1.89-1.35-3.13-1.35-2.36 0-4.28 1.9-4.28 4.23 0 .33.04.66.12.96-3.56-.18-6.72-1.88-8.84-4.48-.37.6-.58 1.3-.58 2.05 0 1.46.75 2.75 1.89 3.51-.7-.02-1.36-.21-1.93-.53v.05c0 2.06 1.47 3.79 3.42 4.18-.36.1-.74.15-1.13.15-.28 0-.55-.03-.8-.08.54 1.68 2.1 2.91 3.96 2.95C7.29 18.05 5.56 18.6 3.75 18.6c-.34 0-.68-.02-1.02-.06 1.89 1.21 4.14 1.92 6.55 1.92 7.85 0 12.15-6.49 12.15-12.15 0-.18 0-.36-.01-.54.83-.6 1.55-1.35 2.12-2.2z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.28.05 2.17.26 2.87.53.7.27 1.26.63 1.84 1.21.58.58.94 1.14 1.21 1.84.27.7.48 1.6.53 2.87.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.28-.26 2.17-.53 2.87-.27.7-.63 1.26-1.21 1.84-.58.58-1.14.94-1.84 1.21-.7.27-1.6.48-2.87.53-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.28-.05-2.17-.26-2.87-.53-.7-.27-1.26-.63-1.84-1.21-.58-.58-.94-1.14-1.21-1.84-.27-.7-.48-1.6-.53-2.87-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.28.26-2.17.53-2.87.27-.7.63-1.26 1.21-1.84.58-.58 1.14-.94 1.84-1.21.7-.27 1.6-.48 2.87-.53 1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.26 0-3.66.01-4.94.07-1.3.06-2.22.28-3.01.59-.8.3-1.46.7-2.12 1.36-.66.66-1.06 1.32-1.36 2.12-.3.79-.53 1.71-.59 3.01-.06 1.28-.07 1.68-.07 4.94s.01 3.66.07 4.94c.06 1.3.28 2.22.59 3.01.3.8.7 1.46 1.36 2.12.66.66 1.32 1.06 2.12 1.36.79.3 1.71.53 3.01.59 1.28.06 1.68.07 4.94.07s3.66-.01 4.94-.07c1.3-.06 2.22-.28 3.01-.59.8-.3 1.46-.7 2.12-1.36.66-.66 1.06-1.32 1.36-2.12.3-.79.53-1.71.59-3.01.06-1.28.07-1.68.07-4.94s-.01-3.66-.07-4.94c-.06-1.3-.28-2.22-.59-3.01-.3-.8-.7-1.46-1.36-2.12-.66-.66-1.32-1.06-2.12-1.36-.79-.3-1.71-.53-3.01-.59-1.28-.06-1.68-.07-4.94-.07zM12 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 8.8c-2.38 0-4.3-1.92-4.3-4.3s1.92-4.3 4.3-4.3 4.3 1.92 4.3 4.3-1.92 4.3-4.3 4.3zm5.83-11.45c0-.6.48-1.08 1.08-1.08.6 0 1.08.48 1.08 1.08s-.48 1.08-1.08 1.08c-.6 0-1.08-.48-1.08-1.08z"/></svg>
              </a>
            </div>
          </div>
          
          {/* 2. Link Groups */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-semibold text-pink-500 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 3. Contact Info (Last column on desktop) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-pink-500 mb-4">Contact Info</h3>
            <div className="text-gray-400 space-y-2 text-sm">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Cairo, New Cairo City, Egypt
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                info@shopstyle.com
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.79 21 3 14.21 3 6V5z"/></svg>
                +20 100 123 4567
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Bar (Copyright) */}
        <div className="py-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ShopStyle. All rights reserved. | Designed by Mohamed Elattar
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;