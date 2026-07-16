import StockGallery from '@/components/StockGallery';
import StockFilters from '@/components/StockFilters';

export const metadata = {
  title: 'Stock | Roberts Motor Group',
  description: 'Browse our complete selection of quality used vehicles. Find your perfect car today.',
};

export default function Stock() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Stock</h1>
          <p className="text-gray-300">Browse our carefully selected range of quality used vehicles</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <StockFilters />
          </div>
          <div className="lg:col-span-3">
            <StockGallery />
          </div>
        </div>
      </div>
    </div>
  );
}