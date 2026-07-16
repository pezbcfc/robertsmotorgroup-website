'use client';

import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <p className="text-4xl mb-2">📞</p>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-300">01234 567890</p>
            <p className="text-gray-400 text-sm">Mon-Fri: 9am-6pm</p>
          </div>
          <div className="text-center">
            <p className="text-4xl mb-2">📍</p>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-300">123 High Street</p>
            <p className="text-gray-400 text-sm">London, UK</p>
          </div>
          <div className="text-center">
            <p className="text-4xl mb-2">✉️</p>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">info@robertsmotorgroup.co.uk</p>
            <p className="text-gray-400 text-sm">We\'ll reply within 2 hours</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Car?</h2>
          <p className="text-gray-300 mb-6">Browse our stock or get in touch with our team today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stock"
              className="bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700 transition duration-200"
            >
              Browse Stock
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded font-bold hover:bg-blue-600 hover:text-white transition duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;