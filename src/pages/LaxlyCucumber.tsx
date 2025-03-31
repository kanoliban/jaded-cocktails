// Updated 2025-03-31: Changed image source to jaf-laxly-cucumber.jpg
// Removed Available in Minnesota section and unused React import.
// Removed unused locations constant.
// Adjusted layout: Align grid items to start, set fixed image container height.
// Re-added Available in Minnesota marquee section, updated heading to Available At.
// Restored pairings section, updated fruit tart image (local file), shortened descriptions.
// Updated pairing description text color to match ABV line.
// Added heading for pairings section.

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
    title: 'Light Bites',
    description: 'Cucumber sandwiches, shrimp ceviche.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&h=150&fit=crop',
  },
  {
    title: 'Seafood',
    description: 'Grilled fish tacos, sushi, crab cakes.',
    image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=150&h=150&fit=crop',
  },
  {
    title: 'Fruit Tart',
    description: 'Tangy lemon or key lime tart.',
    image: '/fruit-tart.jpg',
  },
];

export default function LaxlyCucumber() {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh-4rem)] bg-gradient-to-br from-green-100/30 via-[#f4f1eb] to-green-100/30 p-8">
      <div className="fixed bottom-12 right-12 flex space-x-4 z-10">
        <button 
          onClick={() => navigate('/lavender')}
          className="h-12 w-12 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center hover:bg-black transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={() => navigate('/lemon-drop')}
          className="h-12 w-12 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center hover:bg-black transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
        <div className="relative h-full bg-gradient-to-b from-black/95 to-green-900/90 rounded-[2rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(34,197,94,0.3)] backdrop-blur-sm border border-green-500/10">
      <main className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8">
              <h2 className="text-7xl font-serif tracking-tight text-green-300">Laxly Cucumber</h2>
              <p className="text-sm text-green-400/90 mt-2">750ml · 12.5% ABV · United States</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-2">
                <p className="text-5xl font-medium tracking-tight text-green-200">$20.99</p>
              </div>
              <p className="text-2xl italic text-green-300 font-serif">
                Centered. Poised.<br/>
                Effortlessly Cool.
              </p>
            </div>
            
            <p className="text-green-200/90 mb-12 text-xl leading-relaxed">
              For those who prefer their flavors as crisp as their style, Elderflower, 
              Pear—untold refreshment with a squeeze of Lime.
            </p>
            
            <div className="overflow-hidden mb-12">
              <h3 className="text-xl font-serif mb-2 text-green-300">Available At</h3>
              <marquee className="text-xl font-serif text-green-400/75" scrollamount="10">
                {locations.join(' · ')}
              </marquee>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-2 text-green-300">Pairs Well With</h3>
              <div className="grid grid-cols-3 gap-4 max-w-lg">
                {pairings.map((pairing) => (
                  <div key={pairing.title} className="flex flex-col items-center text-center">
                    <img
                      src={pairing.image}
                      alt={pairing.title}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-green-400/50 shadow-lg transition-all duration-300 hover:ring-green-300 hover:scale-105 mb-2"
                    />
                    <h4 className="text-lg font-serif text-green-200">{pairing.title}</h4>
                    <p className="text-sm text-green-400/90">{pairing.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[600px] w-full overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-green-900/30" />
              <img
                src="/jaf-laxly-cucumber.jpg"
                alt="Laxly Cucumber Cocktail"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            <div className="absolute top-8 right-8">
              <p className="text-2xl font-serif text-green-300">3/3</p>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}