import React from 'react';

const extras = [
  {
    name: 'QR Code Business Card',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Create a small Website for your business or private use optimized for modern smartphone browsers. Provide your contact details as a QR Code Business Card and include your links to the most important social networks.'
  },
  {
    name: 'Social Media QR Code',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Connect multiple links to a single QR Code. Combine all your social media profiles with links to your website and direct links to your PDF, video or audio files. Embed a video presentation for your personal website and add links to all your channels.'
  },
  {
    name: 'PDF QR Code',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Upload your PDF document and create a PDF QR Code. Link to your hosting provider or upload your PDF in the media section. Create a dynamic QR Code and update your PDF anytime even after printing the QR Code.'
  },
  {
    name: 'PDF QR Code for Digital Menu',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'If you want an alternative to your paper menu, you can create a QR Code linking to your digital menu as a PDF file.'
  },
  {
    name: 'QR Code Coupon',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Create a mobile coupon for your customers. They can show the coupon in your shop to get a free drink or a discount on their purchase. Your visitors can easily share your products on their favourite social networks.'
  },
  {
    name: 'One App QR Code for all',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'If you advertise your App on a flyer or poster, you can use a single QR Code to redirect to the appropriate App Store from Apple, Google, Amazon or Microsoft.'
  },
  {
    name: 'GS1 QR Code Management',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'From 2027 onwards, the classic GS1 Barcodes on products are going to be replaced with GS1 Digital Link QR Codes (GS1 Sunrise 2027). Join early with our solution for Interactive Packaging, Product Catalogue, Next Level Product Marketing, and optimized Supply Chain processes.'
  },
  {
    name: 'Product Landing Page',
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Sell your products by simply adding a name, brand, description and an image. Set an optional contact or purchase link. All products have a unique QR Code that leads to their mobile optimized product landing page. Use the integrated PayPal function for direct purchases.'
  },
  {
    name: 'Audio QR Codes',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Whether you are a music band, a teacher, a stand-up comedian or even a poet, this type of QR Code is thought just for you. If you have something to say, sing, shout or explain you will enjoy MP3 QR Codes. The world is now your audience!'
  },
  {
    name: 'Promote your Real Estates',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Create a mobile landing page for your real estates. A potential customer that scans the QR Code next to the property immediately gets all necessary information like photos, price, size and contact details on his Smartphone.'
  },
  {
    name: 'Digital guest list via QR Code',
    image: 'https://i.imgur.com/Yl2Yl7h.jpg',
    description: 'If the guest scans the QR Code on his table, he can leave his name, telephone and email address in order to be notified of a suspected COVID.'
  }
];

const Extras: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Extra Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {extras.map((extra) => (
            <div key={extra.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={extra.image} alt={extra.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{extra.name}</h3>
                <p className="text-sm text-gray-600">{extra.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extras;