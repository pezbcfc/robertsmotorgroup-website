import SellCarForm from '@/components/SellCarForm';

export const metadata = {
  title: 'Sell Your Car | Roberts Motor Group',
  description: 'Sell your car to Roberts Motor Group. Quick valuation and hassle-free process.',
};

export default function SellYourCar() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Sell Your Car</h1>
          <p className="text-gray-300">Get a quick valuation and sell your vehicle with ease</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Easy Process</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="font-bold mb-1">Tell Us About Your Car</h3>
                  <p className="text-gray-600">Provide details about your vehicle's make, model, and condition</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-bold mb-1">Quick Valuation</h3>
                  <p className="text-gray-600">We'll provide an instant valuation based on market data</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-bold mb-1">Arrange Inspection</h3>
                  <p className="text-gray-600">Schedule a convenient time for us to inspect your vehicle</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-bold mb-1">Complete Sale</h3>
                  <p className="text-gray-600">Quick completion with payment transferred to your account</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SellCarForm />
          </div>
        </div>
      </div>
    </div>
  );
}