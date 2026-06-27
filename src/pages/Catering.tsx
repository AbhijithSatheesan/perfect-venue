import { useState } from 'react';

// 1. Define our TypeScript types for the menu data
interface MenuItem {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  fullMenu: string[];
}

// 2. The Menu Data (Updated with your custom Naadan Sadhya image)
const menuData: MenuItem[] = [
  {
    id: "thattukada",
    title: "Live Thattukada Experience",
    shortDesc: "The ultimate live counter setup with piping hot local favorites.",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    fullMenu: [
      "Live Porotta Station",
      "Spicy Beef Roast",
      "Live Fried Rice",
      "Chilli Chicken",
      "Hot Tapioca (Kappa)",
      "Kerala Style Fish Curry",
      "Live Omelet Counter"
    ]
  },
  {
    id: "naadan-sadhya",
    title: "Naadan Sadhya",
    shortDesc: "The quintessential Kerala feast, served traditionally on a banana leaf.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQnh8tl4xXmgafOW4NDWJ7cLC4uMcsTHeOpiogwDl0ospbcI6HCmxbcem_tKWn0fXbFhJ1H8QBm8G9HaOw_W9dnC3bK4p27_-cu0XtdvRzyAe_ItQOUFg6RIJ0sDk5UnH8Wn-gwUD03rY/w640-h480/Onam+Sadhya.jpg",
    fullMenu: [
      "Kerala Matta Rice",
      "Parippu, Ghee & Pappadam",
      "Sambar & Rasam",
      "Aviyal & Cabbage Thoran",
      "Olan, Kalan & Pachadi",
      "Inji Curry & Mango Pickle",
      "Banana Chips & Sharkara Varatti",
      "Palada Payasam & Pazham"
    ]
  },
  {
    id: "dum-biriyani",
    title: "Dum Biriyani Package",
    shortDesc: "Rich, aromatic Dum Biriyani cooked to perfection.",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    fullMenu: [
      "Chicken/Mutton Dum Biriyani",
      "Date & Lemon Pickle",
      "Fresh Onion Salad (Raita)",
      "Pappadam",
      "Mint Chutney"
    ]
  },
  {
    id: "fusion-biriyani",
    title: "Fried Rice & Biriyani Fusion",
    shortDesc: "The perfect mix of Indo-Chinese and traditional roasting.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    fullMenu: [
      "Special Fried Rice",
      "Chicken Roast",
      "Spicy Gobi Manchurian",
      "Fresh Green Salad",
      "Pickle Assortment"
    ]
  }
];

const Catering = () => {
  // State to track which menu is currently open in the popup modal
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);

  // WhatsApp Hook function
  const handleInquire = (menuName: string) => {
    const phoneNumber = "917306479177"; // Update with actual number later
    const message = `Hi, I am interested in the *${menuName}* package. Can we discuss pricing and availability?`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Catering <span className="text-amber-600">Menus</span></h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From live Thattukada counters to traditional Sadhyas, we bring authentic flavors and live cooking experiences to your special day.
        </p>
      </div>

      {/* Grid of Menu Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuData.map((menu) => (
          <div key={menu.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={menu.image} 
                alt={menu.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{menu.title}</h3>
              <p className="text-gray-600 mb-6 h-12">{menu.shortDesc}</p>
              <button 
                onClick={() => setSelectedMenu(menu)}
                className="w-full bg-amber-50 text-amber-700 font-semibold py-2.5 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors"
              >
                View Full Menu
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* The Modal (Popup) */}
      {selectedMenu && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Dark blurred background */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMenu(null)}
          ></div>
          
          {/* Modal Content Box */}
          <div className="relative bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="h-48 relative">
              <img src={selectedMenu.image} alt={selectedMenu.title} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedMenu(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedMenu.title}</h2>
              
              <ul className="space-y-3 mb-8">
                {selectedMenu.fullMenu.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleInquire(selectedMenu.title)}
                className="w-full bg-amber-600 text-white font-bold py-3 rounded-xl hover:bg-amber-700 transition-colors shadow-md flex justify-center items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.347-.272.271-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Inquire via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catering;