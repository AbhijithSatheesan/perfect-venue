import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Gets the current URL path

  // Helper function to dynamically style active links
  const getLinkStyle = (path: string) => {
    const isActive = location.pathname === path;
    return `px-3 py-2 font-medium transition-all duration-300 border-b-2 ${
      isActive 
        ? 'text-amber-600 border-amber-600' 
        : 'text-gray-700 border-transparent hover:text-amber-600 hover:border-amber-300'
    }`;
  };

  return (
    // bg-white/90 and backdrop-blur-md create the modern glass effect
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-black text-gray-900 tracking-tighter">
              PERFECT<span className="text-amber-600">VENUE</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={getLinkStyle("/")}>
              Home
            </Link>
            <Link to="/catering" className={getLinkStyle("/catering")}>
              Catering & Menus
            </Link>
            <Link to="/decorations" className={getLinkStyle("/decorations")}>
              Decorations
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-amber-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:bg-amber-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Book via WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 focus:outline-none p-2"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  // Close Icon (X)
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger Icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 border-t border-gray-100 bg-white' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col shadow-inner">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === '/' ? 'bg-amber-50 text-amber-600' : 'text-gray-700 hover:bg-gray-50 hover:text-amber-600'}`}
          >
            Home
          </Link>
          <Link 
            to="/catering" 
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === '/catering' ? 'bg-amber-50 text-amber-600' : 'text-gray-700 hover:bg-gray-50 hover:text-amber-600'}`}
          >
            Catering & Menus
          </Link>
          <Link 
            to="/decorations" 
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === '/decorations' ? 'bg-amber-50 text-amber-600' : 'text-gray-700 hover:bg-gray-50 hover:text-amber-600'}`}
          >
            Decorations
          </Link>
          
          <button className="mt-4 w-full bg-amber-600 text-white px-4 py-3 rounded-md font-bold shadow-sm hover:bg-amber-700 active:bg-amber-800 transition-colors">
            Book via WhatsApp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;