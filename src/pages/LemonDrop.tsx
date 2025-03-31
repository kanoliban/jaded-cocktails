// Updated 2025-03-31: Changed image source to jaf-lemon-drop.jpg
// Removed Available in Minnesota section and unused React import.
// Removed unused locations constant.
// Adjusted layout: Align grid items to start, set fixed image container height.
// Re-added Available in Minnesota marquee section, updated heading to Available At.
// Restored original pairings section, shortened descriptions.
// Updated main product description copy.
// Updated pairing description text color.
// Added heading for pairings section.
// Removed "Real smooth." from main description.
// Replaced "Real flavor." with "Real smooth." in main description.

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const locations = [
  'Total Wine Maple Grove',
  'Total Wine Minnetonka',
  'Total Wine Rochester',
  'Haskell\'s Plymouth',
  'Haskell\'s Maple Grove',
  'Kowalski\'s Uptown',
  'Kowalski\'s Shorewood',
  'Kowalski\'s Woodbury',
  'Kowalski\'s Oak Park Heights',
  'North Loop Wine & Spirits',
  'Shorewood Liquors',
  'Zipps Liquor',
  'Central Ave Liquors',
  'South Lyndale Liquors',
  'Mick\'s Bottle Shop',
  'Itasca Spirits',
  'Princeton\'s Liquor',
  'W Hotel Minneapolis',
  'Aloft Hotel',
  'Grand Casino Hinkley',
  'Hyatt Minneapolis'
];

const pairings = [
  {
    title: 'Salty Snacks',
    description: 'Nuts, olives, pretzels.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=150&h=150&fit=crop',
  },
  {
    title: 'Spicy',
    description: 'Jalapeño flatbread, spicy tuna rolls.',
    image: 'https://images.unsplash.com/photo-1623345805780-8f01f714e65f?w=150&h=150&fit=crop',
  },
  {
    title: 'Red Meat',
    description: 'Charred steak bites, lamb sliders.',
    image: 'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=150&h=150&fit=crop',
  },
];

export default function LemonDrop() {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh-4rem)] bg-gradient-to-br from-amber-100/30 via-[#f4f1eb] to-amber-100/30 p-8">
      <div className="fixed bottom-12 right-12 flex space-x-4 z-10">
        <button 
          onClick={() => navigate('/laxly-cucumber')}
          className="h-12 w-12 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center hover:bg-black transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={() => navigate('/lavender')}
          className="h-12 w-12 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center hover:bg-black transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
        <div className="relative h-full bg-gradient-to-b from-black/95 to-amber-900/90 rounded-[2rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(251,191,36,0.3)] backdrop-blur-sm border border-amber-500/10">
      <main className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8">
              <h2 className="text-7xl font-serif tracking-tight bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 text-transparent bg-clip-text drop-shadow">Lemon Drop</h2>
              <p className="text-sm text-amber-400/90 mt-2">750ml · 12.5% ABV · United States</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-2">
                <p className="text-5xl font-medium tracking-tight text-amber-200 drop-shadow-lg">$20.99</p>
              </div>
              <p className="text-2xl italic text-amber-300 font-serif drop-shadow">
                Classic, Sophisticated.<br/>
                Sinfully Edgy.
              </p>
            </div>
            
            <p className="text-amber-200/90 mb-12 text-xl leading-relaxed drop-shadow-sm">
              Crafted with tart Meyer Lemons, crisp Juniper Berries, and a kiss of Triple Sec. Low in calories. High in vibe. Real gin. Real smooth.
            </p>
            
            <div className="overflow-hidden mb-12">
              <h3 className="text-xl font-serif mb-2 text-amber-300 drop-shadow">Available At</h3>
              <marquee className="text-xl font-serif text-amber-400/75 drop-shadow-sm" scrollamount="10">
                {locations.join(' · ')}
              </marquee>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-2 text-amber-300">Pairs Well With</h3>
              <div className="grid grid-cols-3 gap-4 max-w-lg">
                {pairings.map((pairing) => (
                  <div key={pairing.title} className="flex flex-col items-center text-center">
                    <img
                      src={pairing.image}
                      alt={pairing.title}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-amber-400/50 shadow-lg transition-all duration-300 hover:ring-amber-300 hover:scale-105 mb-2"
                    />
                    <h4 className="text-lg font-serif text-amber-200">{pairing.title}</h4>
                    <p className="text-sm text-amber-400/90">{pairing.description}</p> 
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[600px] w-full overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(251,191,36,0.1)_100%)]" />
              <img
                src="/jaf-lemon-drop.jpg"
                alt="Lemon Drop Martini"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            <div className="absolute top-8 right-8">
              <p className="text-2xl font-serif text-amber-300 drop-shadow">1/3</p>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}