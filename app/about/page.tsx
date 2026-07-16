export const metadata = {
  title: 'About | Roberts Motor Group',
  description: 'Learn about Roberts Motor Group - your trusted UK used car dealership.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold">About Roberts Motor Group</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Roberts Motor Group has been serving the UK automotive market for over 20 years. We pride ourselves on offering quality used vehicles at competitive prices, backed by exceptional customer service.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our team of experienced professionals is dedicated to finding the perfect vehicle for you, whether you're a first-time buyer or an experienced collector.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
            <span className="text-gray-400">Dealership Image</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-black text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-2">20+</h3>
            <p className="text-gray-300">Years of Experience</p>
          </div>
          <div className="p-6 bg-blue-600 text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-2">5000+</h3>
            <p className="text-blue-100">Happy Customers</p>
          </div>
          <div className="p-6 border-2 border-black rounded-lg">
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-gray-600">Vehicles Sold Annually</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">✓ Quality Assured</h3>
              <p className="text-gray-600">Every vehicle undergoes rigorous inspection and testing before sale.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">✓ Competitive Pricing</h3>
              <p className="text-gray-600">We offer the best value for money in the market.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">✓ Warranty Coverage</h3>
              <p className="text-gray-600">All vehicles come with comprehensive warranty protection.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">✓ Expert Support</h3>
              <p className="text-gray-600">Our knowledgeable team is here to help you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}