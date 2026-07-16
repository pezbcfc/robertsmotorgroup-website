'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-500">Roberts Motor Group</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for quality used vehicles and exceptional service.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/stock" className="hover:text-blue-400 transition">Stock</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/sell-your-car" className="hover:text-blue-400 transition">Sell Your Car</Link></li>
              <li><Link href="/part-exchange" className="hover:text-blue-400 transition">Part Exchange</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition">Finance Options</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Vehicle Insurance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">📞 01234 567890</p>
            <p className="text-gray-400 text-sm mb-2">✉️ info@robertsmotorgroup.co.uk</p>
            <p className="text-gray-400 text-sm">📍 123 High Street, London, UK</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 Roberts Motor Group. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;