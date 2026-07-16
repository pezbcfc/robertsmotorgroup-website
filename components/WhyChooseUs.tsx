'use client';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '✓',
      title: 'Quality Assurance',
      description: 'Every vehicle undergoes rigorous inspection and testing before sale',
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Best value for money with transparent, no-hidden-fees pricing',
    },
    {
      icon: '🛡️',
      title: 'Comprehensive Warranty',
      description: 'All vehicles come with comprehensive warranty protection',
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Knowledgeable staff ready to help you find the perfect vehicle',
    },
    {
      icon: '📋',
      title: 'Hassle-Free Process',
      description: 'Simple documentation and quick completion process',
    },
    {
      icon: '🎯',
      title: 'Part Exchange',
      description: 'Trade in your current vehicle with competitive valuation',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Why Choose Roberts Motor Group?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Your trusted partner for quality used vehicles and exceptional service
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-3">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;