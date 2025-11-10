import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-700 mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
          We'd love to hear from you. Whether you have a question about our products, an inquiry, or feedback, our team is ready.
        </p>
      </header>

      {/* --- */}

      {/* Contact Details and Map Placeholder */}
      <section className="grid md:grid-cols-3 gap-12 mb-20">
        
        {/* 1. Contact Information */}
        <div className="md:col-span-1 space-y-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-pink-600">
            Our Details
          </h2>
          
          {/* Email */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Email Us</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">support@shopstyle.com</p>
          </div>
          
          {/* Phone */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Call Us</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
          </div>
          
          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Visit Us</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">123 Fashion Ave, Suite 200</p>
            <p className="text-lg text-gray-600 dark:text-gray-400">New York, NY 10001, USA</p>
          </div>
        </div>
        
        {/* 2. Map Placeholder */}
        <div className="md:col-span-2 relative h-96 overflow-hidden rounded-xl shadow-2xl bg-gray-200 dark:bg-gray-700">
          <div className="flex items-center justify-center w-full h-full text-gray-500 dark:text-gray-400 text-xl font-medium">
            
            <p>Interactive Map Placeholder</p>
          </div>
          {/* In a real application, you would embed a Google Maps or similar iframe here */}
        </div>
      </section>

      {/* --- */}

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Send Us A Message
        </h2>
        
        {/* Simple Contact Form (Not Functional without a backend service like Formspree or a server) */}
        <form className="space-y-6 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
          
          {/* Name and Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input type="text" id="name" name="name" required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input type="email" id="email" name="email" required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="you@example.com"
              />
            </div>
          </div>
          
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
            <input type="text" id="subject" name="subject" required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Inquiry about an order"
            />
          </div>
          
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
            <textarea id="message" name="message" rows="4" required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Tell us how we can help..."
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full px-6 py-3 bg-pink-600 text-white text-lg font-semibold rounded-lg 
                       hover:bg-pink-700 transition-colors duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
};

export default ContactPage;