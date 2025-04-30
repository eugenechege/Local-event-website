import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EventCard from './components/EventCard';

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('events');

  const categories = ["All", "Music", "Art", "Food", "Tech", "Wellness", "Comedy"];

  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        title: "Summer Music Festival",
        date: "2023-07-15",
        time: "18:00",
        location: "Central Park",
        category: "Music",
        price: 25,
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        isFavorite: false,
        attendees: 1250,
        duration: "4 hours"
      },
      {
        id: 2,
        title: "Nairobi Laugh Bar",
        date: "2023-07-15",
        time: "20:00",
        location: "Kingara Rd",
        category: "Comedy",
        price: 20,
        image: "https://standupcollective.co.ke/wp-content/uploads/2024/10/Nairobilaughbar.jpg",
        isFavorite: false,
        attendees: 500,
        duration: "2 hours"
      },
      {
        id: 3,
        title: "Women in Art",
        date: "2023-07-15",
        time: "15:00",
        location: "Village Market",
        category: "Art",
        price: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_cuP-PE8CtpmYCRCm66q3XHNYrmTH-ijbg&s",
        isFavorite: false,
        attendees: 1250,
        duration: "6 hours"
      },
      {
        id: 4,
        title: "Nairobi Street Food",
        date: "2023-07-15",
        time: "14:00",
        location: "Jamhuri Park",
        category: "Food",
        price: 10,
        image: "https://storage.googleapis.com/m_tickets/assets/event_poster/nairobi-street-food-festival-2023-08-17T13-02-15.922916.jpeg",
        isFavorite: false,
        attendees: 1050,
        duration: "3 hours"
      },
      {
        id: 5,
        title: "Health and Wellness",
        date: "2024-01-15",
        time: "10:00",
        location: "Arboretum",
        category: "Wellness",
        price: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-jstk15F0jYTpbJVSl_USYI6qy6JG8Z0iw&s",
        isFavorite: false,
        attendees: 1250,
        duration: "4 hours"
      },
      {
        id: 6,
        title: "Tech Expo",
        date: "2024-03-11",
        time: "11:00",
        location: "KICC",
        category: "Tech",
        price: 17,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykp__wcmSSxunMVKNXde1G7edqWAWgWd56Q&s",
        isFavorite: false,
        attendees: 1250,
        duration: "6 hours"
      },
      {
        id: 7,
        title: "Sol Fest",
        date: "2024-11-10",
        time: "21:00",
        location: "Carnivore Grounds",
        category: "Music",
        price: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYv85w018_Dp605iKjnllwEORPpdXDLF-adtn2ZyYDqxD8dGJ7pDjFrAMUwwp1n05L1A&usqp=CAU",
        isFavorite: false,
        attendees: 2500,
        duration: "4 hours"
      },
      {
        id: 8,
        title: "The Trinity Experience",
        date: "2025-01-08",
        time: "18:00",
        location: "Nairobi Theatre",
        category: "Comedy",
        price: 15,
        image: "https://i.ytimg.com/vi/5pC1SvCoIVE/hq720.jpg",
        isFavorite: false,
        attendees: 500,
        duration: "2 hours"
      },
      {
        id: 9,
        title: "Kisima Festival",
        date: "2025-11-15",
        time: "15:00",
        location: "Village Market",
        category: "Wellness",
        price: 15,
        image: "https://www.karibukenya.co.uk/images/yoga/_800s/Kisima_2025.png",
        isFavorite: false,
        attendees: 500,
        duration: "4 hours"
      }
    ];

    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);

  const toggleFavorite = (id) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, isFavorite: !event.isFavorite } : event
    ));
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'events' ? (
          <>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Discover Local Events</h2>
              <p className="text-gray-600">Find the best happenings in your city</p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-center mb-4">Event Categories</h3>
              <div className="flex overflow-x-auto space-x-4 pb-4">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg shadow-md transition-all ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
              </div>
            ) : filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-medium text-gray-600">No events found</h2>
                <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <AboutSection />
        )}
      </main>

      <Footer />
    </div>
  );
};

const AboutSection = () => (
  <div className="max-w-4xl mx-auto py-12">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">About LocalEventFinder</h2>
      <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
    </div>
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
      <div className="md:flex">
        <div className="md:w-1/2 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
          <p className="text-gray-600 mb-4">
          Our Local Event Finder platform is designed to connect people with the best events happening around them. Whether you're into music, tech, sports, food, or community meetups, our goal is to make discovering local experiences easy and personalized. With smart search, event categories, location-based recommendations, and social login, we bring everything you need into one simple, user-friendly platform. Never miss out on what’s happening near you — explore, attend, and enjoy!
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt="Team working together"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);

export default App;