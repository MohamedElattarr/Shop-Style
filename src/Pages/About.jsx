import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      
      {/* Main Section: Title and Mission */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-600 mb-4">
          Our Story: <span className="text-pink-600">ShopStyle</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-600 max-w-3xl mx-auto">
          "We believe that fashion should be accessible, sustainable, and truly expressive of your unique identity."
        </p>
      </header>

      {/* --- */}

      {/* Vision and Mission Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative overflow-hidden rounded-xl shadow-2xl h-80">
            {/* Replace the URL with an actual ShopStyle image */}
            <img 
                src="https://plus.unsplash.com/premium_photo-1694476790742-8e95108c4b52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGphY2tldHMlMjB3YWxscGFwZXIlMjB3aWRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" 
                alt="Our Vision" 
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-600 mb-4">
            Our Vision: Empowering Style
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-6">
            ShopStyle started with a simple idea: to provide a platform that makes finding the latest and highest-quality fashion lines an enjoyable and effortless experience. We strive to be your premier destination for discovery and inspiration.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            Our mission is to inspire confidence through style. Every piece in our collection is carefully selected to ensure quality, design, and the ability to express your unique personality.
          </p>
        </div>
      </section>

      {/* --- */}

      {/* Core Values Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* 1. Quality */}
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-pink-600">
            <span className="text-5xl text-pink-600 mb-4 inline-block">✨</span>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Quality First</h3>
            <p className="text-gray-600 dark:text-gray-400">We never compromise on quality. Every product undergoes rigorous inspection to ensure the durability and style you deserve.</p>
          </div>
          
          {/* 2. Transparency */}
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-600">
            <span className="text-5xl text-blue-600 mb-4 inline-block">💡</span>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Transparency</h3>
            <p className="text-gray-600 dark:text-gray-400">From the source to your doorstep, we are committed to providing clear and honest information about our products and processes.</p>
          </div>
          
          {/* 3. Customer Focus */}
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-yellow-500">
            <span className="text-5xl text-yellow-500 mb-4 inline-block">❤️</span>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Customer Focus</h3>
            <p className="text-gray-600 dark:text-gray-400">You are at the heart of everything we do. We work hard to provide the best possible shopping experience and continuous support.</p>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Call to Action Section */}
      <section className="text-center bg-gray-100 dark:bg-gray-800 p-10 rounded-lg shadow-inner">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Join the ShopStyle Family
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Explore our curated collection and start your journey toward expressing your unique style.
        </p>
        <a 
          href="/products" 
          className="inline-block px-8 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full 
                     hover:bg-pink-700 transition-colors duration-300 shadow-lg"
        >
          Shop Now
        </a>
      </section>

    </div>
  );
};

export default AboutPage;