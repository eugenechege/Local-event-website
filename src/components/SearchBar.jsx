import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className="relative w-full md:w-1/2">
      <input
        type="text"
        placeholder="Search events or locations..."
        className="w-full py-2 px-4 pr-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={searchTerm}
        onChange={handleSearch}
      />
      <FiSearch className="absolute right-3 top-3 text-gray-500" />
    </div>
  );
};

export default SearchBar;