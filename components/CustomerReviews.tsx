'use client';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Smith',
      rating: 5,
      comment: 'Excellent service! Found the perfect car within my budget. Highly recommended.',
      date: 'March 2024',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Professional team, quality vehicles, fair prices. Will definitely return.',
      date: 'February 2024',
    },
    {
      id: 3,
      name: 'Michael Brown',
      rating: 5,
      comment: 'Best part exchange deal I\'ve ever received. Very satisfied with the process.',
      date: 'January 2024',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      rating: 5,
      comment: 'Great selection and helpful staff. Buying my next car here for sure!',
      date: 'December 2023',
    },
  ];

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Customer Reviews</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          See what our satisfied customers have to say
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-lg font-bold mb-1">{review.name}</p>
              <p className="text-sm text-gray-500 mb-3">{review.date}</p>
              <div className="mb-3">{renderStars(review.rating)}</div>
              <p className="text-gray-700 italic">\"</p>
              <p className="text-gray-700 mb-3">{review.comment}</p>
              <p className="text-gray-700 italic">\"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;