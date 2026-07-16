export const metadata = {
  title: 'Part Exchange | Roberts Motor Group',
  description: 'Part exchange your vehicle for your next car. Best prices paid for your trade-in.',
};

export default function PartExchange() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Part Exchange</h1>
          <p className="text-gray-300">Trade in your current vehicle towards your next purchase</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Simple Part Exchange</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Looking to upgrade? We make part exchange simple and straightforward. Bring your current vehicle and choose from our extensive stock of quality used cars.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We'll provide a competitive valuation for your trade-in and apply it directly to your purchase, often with no additional paperwork or hassle.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">We Accept</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>✓ Any make or model</li>
                  <li>✓ Any mileage</li>
                  <li>✓ Any condition</li>
                  <li>✓ Damaged vehicles</li>
                  <li>✓ Non-runners</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Part Exchange Benefits</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-1">Competitive Valuation</p>
                <p className="text-blue-100 text-sm">Get the best price for your vehicle</p>
              </div>
              <div>
                <p className="font-bold mb-1">Quick Process</p>
                <p className="text-blue-100 text-sm">Complete your exchange in hours, not days</p>
              </div>
              <div>
                <p className="font-bold mb-1">No Hidden Costs</p>
                <p className="text-blue-100 text-sm">Transparent pricing with no surprises</p>
              </div>
              <div>
                <p className="font-bold mb-1">Same-Day Completion</p>
                <p className="text-blue-100 text-sm">Drive away in your new car the same day</p>
              </div>
              <div>
                <p className="font-bold mb-1">Expert Advisors</p>
                <p className="text-blue-100 text-sm">Our team will guide you through every step</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Part Exchange?</h3>
          <p className="text-gray-600 mb-6">Call us today or visit our showroom to discuss your part exchange options</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}