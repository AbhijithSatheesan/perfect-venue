import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative w-full h-[calc(100vh-5rem)]">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' 
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Text Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Make Your Special Occasions <span className="text-amber-500">Unforgettable</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-200 mb-10">
          From exquisite live catering to stunning stage decorations, Perfect Venue brings your vision to life with zero stress.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/catering" 
            className="px-8 py-3 text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors duration-300"
          >
            Explore Our Menus
          </Link>
          <Link 
            to="/decorations" 
            className="px-8 py-3 text-base font-medium rounded-md text-amber-500 bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            View Decorations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;