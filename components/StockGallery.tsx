'use client';

const StockGallery = () => {
  const vehicles = [
    {
      id: 1,
      name: '2023 BMW 3 Series',
      price: '£32,999',
      mileage: '15,000 miles',
      fuel: 'Petrol',
      transmission: 'Automatic',
      year: 2023,
    },
    {
      id: 2,
      name: '2022 Mercedes-Benz C-Class',
      price: '£28,999',
      mileage: '22,000 miles',
      fuel: 'Diesel',
      transmission: 'Automatic',
      year: 2022,
    },
    {
      id: 3,
      name: '2023 Audi A4',
      price: '£31,999',
      mileage: '18,000 miles',
      fuel: 'Hybrid',
      transmission: 'Automatic',
      year: 2023,
    },
    {
      id: 4,
      name: '2022 Volkswagen Golf',
      price: '£18,999',
      mileage: '28,000 miles',
      fuel: 'Petrol',
      transmission: 'Manual',
      year: 2022,
    },
    {
      id: 5,
      name: '2021 Ford Focus',
      price: '£15,999',
      mileage: '35,000 miles',
      fuel: 'Petrol',
      transmission: 'Manual',
      year: 2021,
    },
    {
      id: 6,
      name: '2023 Toyota Prius',
      price: '£25,999',
      mileage: '12,000 miles',
      fuel: 'Hybrid',
      transmission: 'Automatic',
      year: 2023,
    },
  ];

  return (
    <div>
      <p className="text-gray-600 mb-6">Showing {vehicles.length} vehicles</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-200">
            <div className="bg-gray-700 h-64 flex items-center justify-center">
              <span className="text-gray-500">Vehicle Image</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold">{vehicle.name}</h3>
                  <p className="text-sm text-gray-600">{vehicle.year}</p>
                </div>
                <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">Featured</span>
              </div>
              <p className="text-blue-600 font-bold text-2xl mb-4">{vehicle.price}</p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                <div>📍 {vehicle.mileage}</div>
                <div>⛽ {vehicle.fuel}</div>
                <div>⚙️ {vehicle.transmission}</div>
                <div>📅 {vehicle.year}</div>
              </div>
              <button className="w-full bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition duration-200">
                View Full Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockGallery;