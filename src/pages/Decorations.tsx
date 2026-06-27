import { useState } from 'react';

// 1. Define our TypeScript types for the decoration data
interface DecorationItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

// 2. The Decorations Data (Reordered for business priority)
const decorationData: DecorationItem[] = [
  {
    id: "dec-1",
    title: "Christian Wedding Reception Stage",
    category: "Wedding",
    image: "https://jaspira.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-02-at-9.14.00-PM.webp" 
  },
  {
    id: "dec-2",
    title: "Traditional Hindu Wedding Mandapam",
    category: "Wedding",
    image: "https://i.pinimg.com/736x/da/d5/91/dad591cf28c51351b3db694666305289.jpg" 
  },
  {
    id: "dec-3",
    title: "Floral Engagement Backdrop",
    category: "Engagement",
    image: "https://i.pinimg.com/736x/5c/7c/56/5c7c56f962c54f8815b4251c2e476163.jpg" // Your new engagement image!
  },
  {
    id: "dec-4",
    title: "White & Gold Baptism Setup",
    category: "Baptism",
    image: "https://crystallinestudio.com/image_gallery/thumbs/Crystalline-photography-3002.jpg"
  },
  {
    id: "dec-5",
    title: "Holy Communion Pastel Decor",
    category: "Holy Communion",
    image: "https://www.indianeventhub.com/wp-content/uploads/2024/09/Baptism-decor-Maryland-1280x960.jpeg"
  },
  {
    id: "dec-6",
    title: "Kids Birthday Balloon Arch & Theme",
    category: "Birthday",
    image: "https://thepartyplanet.in/cdn/shop/files/Kids_Stage_Hall_and_Entrance_Birthday_Decoration_-_My_Store-3848287.jpg?v=1727210329"
  }
];

// Extract unique categories for our filter buttons
const categories = ["All", ...Array.from(new Set(decorationData.map(item => item.category)))];

const Decorations = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter the data based on the selected category
  const filteredData = activeCategory === "All" 
    ? decorationData 
    : decorationData.filter(item => item.category === activeCategory);

  // WhatsApp Hook function
  const handleInquire = (title: string) => {
    const phoneNumber = "917306479177"; // Update with the real business number
    const message = `Hi, I saw the *${title}* setup on your website and would love to discuss decorations for an upcoming event.`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Event <span className="text-amber-600">Decorations</span></h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          From traditional wedding mandapams to vibrant birthday parties and elegant baptisms, we make your family's special moments beautiful.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm md:text-base rounded-full font-medium transition-all duration-200 border ${
              activeCategory === category 
                ? 'bg-amber-600 text-white border-amber-600 shadow-md' 
                : 'bg-white text-gray-700 border-gray-200 hover:border-amber-400 hover:text-amber-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
            
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              {/* Category Badge Floating on Image */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-700 shadow-sm">
                {item.category}
              </div>
            </div>

            {/* Always-visible text and button area */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              
              <div className="mt-auto pt-2">
                <button 
                  onClick={() => handleInquire(item.title)}
                  className="w-full bg-amber-50 text-amber-700 font-semibold py-2.5 rounded-lg border border-amber-200 hover:bg-amber-600 hover:text-white transition-colors flex justify-center items-center gap-2"
                >
                  {/* WhatsApp Icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.347-.272.271-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Decorations;