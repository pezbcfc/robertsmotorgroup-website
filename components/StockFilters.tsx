'use client';

import { useState } from 'react';

const StockFilters = () => {
  const [filters, setFilters] = useState({
    make: '',
    priceMin: '',
    priceMax: '',
    fuel: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
      <h3 className="text-xl font-bold mb-6">Filter Vehicles</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-2">Make</label>
          <select
            value={filters.make}
            onChange={(e) => handleFilterChange('make', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">All Makes</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes-Benz</option>
            <option value="Audi">Audi</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Ford">Ford</option>
            <option value="Toyota">Toyota</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Min Price</label>
          <input
            type="number"
            value={filters.priceMin}
            onChange={(e) => handleFilterChange('priceMin', e.target.value)}
            placeholder="£0"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Max Price</label>
          <input
            type="number"
            value={filters.priceMax}
            onChange={(e) => handleFilterChange('priceMax', e.target.value)}
            placeholder="£100,000"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Fuel Type</label>
          <select
            value={filters.fuel}
            onChange={(e) => handleFilterChange('fuel', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">All Fuel Types</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition duration-200">
          Apply Filters
        </button>
        <button className="w-full bg-gray-300 text-black py-2 rounded font-bold hover:bg-gray-400 transition duration-200">
          Reset
        </button>
      </div>
    </div>
  );
};

export default StockFilters;