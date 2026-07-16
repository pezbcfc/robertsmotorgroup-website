'use client';

const FeaturedVehicles = () => {
  const vehicles = [
    {
      id: 1,
      name: '2023 BMW 3 Series',
      price: '£32,999',
      mileage: '15,000 miles',
      fuel: 'Petrol',
      transmission: 'Automatic',
      image: 'bg-gray-700',
    },
    {
      id: 2,
      name: '2022 Mercedes-Benz C-Class',
      price: '£28,999',
      mileage: '22,000 miles',
      fuel: 'Diesel',
      transmission: 'Automatic',
      image: 'bg-gray-700',
    },
    {
      id: 3,
      name: '2023 Audi A4',
      price: '£31,999',
      mileage: '18,000 miles',
      fuel: 'Hybrid',
      transmission: 'Automatic',
      image: 'bg-gray-700',
    },
    {
      id: 4,
      name: '2022 Volkswagen Golf',
      price: '£18,999',
      mileage: '28,000 miles',
      fuel: 'Petrol',
      transmission: 'Manual',
      image: 'bg-gray-700',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Featured Vehicles</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hand-picked selection of quality vehicles from our current stock
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className={`${vehicle.image} h-48 flex items-center justify-center`}>
                <span className="text-gray-500">Vehicle Image</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{vehicle.name}</h3>
                <p className="text-blue-600 font-bold text-xl mb-4">{vehicle.price}</p>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <p>📍 {vehicle.mileage}</p>
                  <p>⛽ {vehicle.fuel}</p>
                  <p>⚙️ {vehicle.transmission}</p>
                </div>
                <button className="w-full bg-black text-white py-2 rounded font-bold hover:bg-gray-800 transition duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;