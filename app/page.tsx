import Hero from '@/components/Hero';
import FeaturedVehicles from '@/components/FeaturedVehicles';
import WhyChooseUs from '@/components/WhyChooseUs';
import CustomerReviews from '@/components/CustomerReviews';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Home | Roberts Motor Group',
  description: 'Welcome to Roberts Motor Group. Quality used cars you can trust. Browse our premium selection of vehicles.',
};

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedVehicles />
      <WhyChooseUs />
      <CustomerReviews />
      <ContactSection />
    </div>
  );
}