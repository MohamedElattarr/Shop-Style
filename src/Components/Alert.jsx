// Components/Alert.jsx
import React, { useEffect, useState } from 'react';

const Alert = ({ message, type = 'success', duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  // إخفاء التنبيه بعد مدة محددة
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    // التنظيف عند إلغاء تحميل المكون
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  const styleClasses = {
    success: 'bg-green-500 border-green-700',
    info: 'bg-blue-500 border-blue-700',
    error: 'bg-red-500 border-red-700',
    wishlist: 'bg-pink-500 border-pink-700 text-white', // لون خاص للمفضلة
  };

  const icon = {
      wishlist: '💖',
      success: '✅',
  }
  
  return (
    <div 
        className={`fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-xl 
                    text-white border-l-4 transition-opacity duration-300 ease-in-out
                    ${styleClasses[type]} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        role="alert"
    >
        <div className="flex items-center">
            <span className="text-xl mr-3">{icon[type] || icon.success}</span>
            <p className="font-medium">{message}</p>
        </div>
    </div>
  );
};

export default Alert;