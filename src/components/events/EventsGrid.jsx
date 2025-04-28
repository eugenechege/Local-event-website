import EventCard from './EventCard';

const EventsGrid = ({ events, loading, onToggleFavorite }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-medium text-gray-600">No events found</h2>
        <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map(event => (
        <EventCard 
          key={event.id} 
          event={event} 
          onToggleFavorite={onToggleFavorite} 
        />
      ))}
    </div>
  );
};

export default EventsGrid;