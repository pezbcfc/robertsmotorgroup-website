'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Quality Used Cars You Can Trust
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Discover our premium selection of quality used vehicles. Each car is carefully inspected and competitively priced to give you the best value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/stock"
                className="bg-blue-600 text-white px-8 py-4 rounded font-bold text-center hover:bg-blue-700 transition duration-200"
              >
                Browse Stock
              </Link>
              <Link
                href="/sell-your-car"
                className="border-2 border-blue-600 text-blue-400 px-8 py-4 rounded font-bold text-center hover:bg-blue-600 hover:text-white transition duration-200"
              >
                Sell Your Car
              </Link>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center h-96">
            <span className="text-gray-500 text-lg">Premium Car Image</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;