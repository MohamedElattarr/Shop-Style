import React, { useState, useEffect } from 'react';

// يمكنك استبدال هذه بمسارات صورك الفعلية، ونص وعنوان كل شريحة، ورابط الزر
const slides = [
  { 
    url: 'https://images.unsplash.com/photo-1732257119998-b66cda63dcfc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEhvb2RpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500', 
    title: 'Beauty & Wellness', 
    description: 'Elevate your style with our premium fashion collection for every occasion',
    buttonText: 'Explore Collection',
    buttonLink: '/products'
  },
  { 
    url: 'https://plus.unsplash.com/premium_photo-1673356302169-574db56b52cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG9vZGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500', 
    title: 'Fresh Arrivals', 
    description: 'Discover the latest trends in fashion and accessories.',
    buttonText: 'Shop New Arrivals',
    buttonLink: '/products'
  },
  { 
    url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500', 
    title: 'Seasonal Sale', 
    description: 'Don\'t miss out on our amazing discounts!',
    buttonText: 'View Sale',
    buttonLink: '/products'
  },
];

const ImageSlider = ({ autoSlide = false, autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // تأثير التنقل التلقائي (Auto-slide effect)
  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(goToNext, autoSlideInterval);
    return () => clearInterval(slideInterval); // تنظيف المؤقت عند إلغاء تحميل المكون
  }, [autoSlide, autoSlideInterval, goToNext]); // يعتمد على هذه المتغيرات لإعادة التشغيل

  return (
    // حاوية السلايدر الرئيسية
    // full-width (w-full) وارتفاع ثابت (h-screen أو h-[500px] حسب رغبتك)
    <div className="relative w-full h-[500px] overflow-hidden"> 
      
      {/* 🖼️ عرض الشرائح (كل شريحة كعنصر منفصل) */}
      {slides.map((slide, slideIndex) => (
        <div 
          key={slideIndex}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.url})` }}
          className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-700 ease-in-out
                      flex items-center justify-center text-center p-4 
                      ${slideIndex === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {/* محتوى الشريحة (العنوان، الوصف، الزر) */}
          <div className="text-white max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
              {slide.description}
            </p>
            <a 
              href={slide.buttonLink} 
              className="inline-block px-8 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full 
                         hover:bg-pink-700 transition-colors duration-300 shadow-lg"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
      
      {/* ◀️ زر السابق */}
      <button 
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-colors z-20"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ▶️ زر التالي */}
      <button 
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-colors z-20"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* النقاط السفلية للتنقل المباشر */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((slide, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              slideIndex === currentIndex ? 'bg-pink-600' : 'bg-gray-400 bg-opacity-70'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
 

       
        

    </div>
  );
};

export default ImageSlider;

