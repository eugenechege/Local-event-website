import { FiSearch } from 'react-icons/fi';

const Header = ({ searchTerm, setSearchTerm, activeTab, setActiveTab }) => {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold">LocalEventFinder</h1>
            <nav className="hidden md:flex space-x-1">
              <button 
                onClick={() => setActiveTab('events')}
                className={`px-4 py-2 rounded-lg transition ${activeTab === 'events' ? 'bg-indigo-700' : 'hover:bg-indigo-500'}`}
              >
                Events
              </button>
              <button 
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2 rounded-lg transition ${activeTab === 'about' ? 'bg-indigo-700' : 'hover:bg-indigo-500'}`}
              >
                About
              </button>
            </nav>
          </div>
          
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search events or locations..."
              className="w-full py-2 px-4 pr-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
          
          <nav className="flex gap-4">
            <button className="px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Login</button>
            <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition">
              Sign Up
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;