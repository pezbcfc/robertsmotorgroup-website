import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | Roberts Motor Group',
  description: 'Get in touch with Roberts Motor Group. Call us or visit our showroom.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600 mb-2">Monday - Friday: 9am - 6pm</p>
            <p className="text-gray-600">Saturday: 9am - 5pm</p>
            <p className="text-gray-600">Sunday: Closed</p>
            <p className="text-blue-600 font-bold text-lg mt-4">01234 567890</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-600 mb-4">
              Roberts Motor Group<br />
              123 High Street<br />
              London, UK<br />
              SW1A 1AA
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600 mb-4">
              General: info@robertsmotorgroup.co.uk<br />
              Sales: sales@robertsmotorgroup.co.uk<br />
              Service: service@robertsmotorgroup.co.uk
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Visit Our Showroom</h2>
            <div className="bg-gray-200 rounded-lg aspect-video mb-6 flex items-center justify-center">
              <span className="text-gray-500">Map Location</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Opening Hours</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}