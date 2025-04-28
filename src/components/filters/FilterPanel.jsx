import { FiFilter, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

const FilterPanel = ({ isOpen, onToggle }) => {
  return (
    <div className="relative">
      <button 
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition"
      >
        <FiFilter />
        <span>Filters</span>
        <FiChevronDown className={`transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
          <div className="mb-4">
            <h3 className="font-medium mb-2">Date Range</h3>
            <div className="flex gap-2">
              <input type="date" className="w-full p-2 border rounded" />
              <span className="self-center">to</span>
              <input type="date" className="w-full p-2 border rounded" />
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex items-center gap-2">
              <span>$0</span>
              <input type="range" className="w-full" min="0" max="500" />
              <span>$500+</span>
            </div>
          </div>
          <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;