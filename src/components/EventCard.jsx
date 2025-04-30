import { FiMapPin, FiCalendar, FiHeart, FiClock, FiUsers } from 'react-icons/fi';

const EventCard = ({ event, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 object-cover"
        />
        <button 
          onClick={() => onToggleFavorite(event.id)}
          className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition shadow-sm"
        >
          <FiHeart 
            className={`text-lg ${event.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} 
          />
        </button>
        {event.price === 0 ? (
          <span className="absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-sm">
            FREE
          </span>
        ) : (
          <span className="absolute top-3 left-3 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full shadow-sm">
            ${event.price}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <FiMapPin className="mr-2 text-indigo-500" />
          <span>{event.location}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-2">
          <FiCalendar className="mr-2 text-indigo-500" />
          <span>
            {new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'short', 
              month: 'short', 
              day: 'numeric' 
            })} • {event.time}
          </span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-2">
          <FiClock className="mr-2 text-indigo-500" />
          <span>{event.duration}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <FiUsers className="mr-2 text-indigo-500" />
          <span>{event.attendees.toLocaleString()} attending</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
            {event.category}
          </span>
          <button  onClick={() => alert(`Tickets for "${event.title}" coming soon!`)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition shadow-md">
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;