import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const products = [
  {
    name: 'Lemon Drop',
    path: '/lemon-drop',
  },
  {
    name: 'Lavender',
    path: '/lavender',
  },
  {
    name: 'Laxly Cucumber',
    path: '/laxly-cucumber',
  },
];

export default function Navigation() {
  const location = useLocation();
  
  const getNavColor = () => {
    switch (location.pathname) {
      case '/lemon-drop':
        return {
          color: 'amber',
          url: 'https://www.totalwine.com/spirits/ready-to-drink/jayded-af-lemon-drop-gin-martini/p/2126230431'
        };
      case '/lavender':
        return {
          color: 'purple',
          url: 'https://www.totalwine.com/spirits/ready-to-drink/jayded-af-lavender-gin-martini/p/2126230433'
        };
      case '/laxly-cucumber':
        return {
          color: 'green',
          url: 'https://www.totalwine.com/spirits/ready-to-drink/jayded-af-laxly-cucumber-gin-martini/p/2126256073?s=1605&igrules=true'
        };
      default:
        return {
          color: 'amber',
          url: 'https://www.totalwine.com/spirits/ready-to-drink/jayded-af-lemon-drop-gin-martini/p/2126230431'
        };
    }
  };

  const { color, url } = getNavColor();
  
  const buttonClasses = {
    amber: 'bg-amber-500 hover:bg-amber-600 border-amber-100',
    purple: 'bg-purple-500 hover:bg-purple-600 border-purple-100',
    green: 'bg-green-500 hover:bg-green-600 border-green-100'
  };

  const linkClasses = {
    amber: {
      active: 'text-amber-900',
      inactive: 'text-amber-700 hover:text-amber-900'
    },
    purple: {
      active: 'text-purple-900',
      inactive: 'text-purple-700 hover:text-purple-900'
    },
    green: {
      active: 'text-green-900',
      inactive: 'text-green-700 hover:text-green-900'
    }
  };

  return (
    <nav className={`border-b ${buttonClasses[color].split(' ')[2]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/lemon-drop">
              <h1 className="text-2xl font-serif tracking-wider">JAYDED AF</h1>
              <p className="text-xs tracking-widest">COCKTAILS</p>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {products.map((product) => (
              <Link
                key={product.path}
                to={product.path}
                className={`${
                  location.pathname === product.path 
                    ? linkClasses[color].active 
                    : linkClasses[color].inactive
                } px-3 py-2 text-sm font-medium`}
              >
                {product.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer" 
              className={`px-6 py-2.5 ${buttonClasses[color]} text-white rounded-full text-sm font-medium tracking-wide transition-colors shadow-md hover:shadow-lg flex items-center gap-2`}
            >
              Find a Retailer
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}