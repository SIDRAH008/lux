import React, { useState } from 'react';

const SearchBar = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all'); // Replace with your actual variable name for selected category
  const [food, setFood] = useState([]); // Replace with your actual variable name for the food data

  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const filterFood = () => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();

    if (selectedCategory === 'all') {
      return food.filter(
        (item) =>
          item.CategoryName.toLowerCase().includes(lowercasedSearchTerm) ||
          item.name.toLowerCase().includes(lowercasedSearchTerm)
      );
    } else {
      return food
        .filter((item) => item.CategoryName === selectedCategory)
        .filter((item) =>
          item.name.toLowerCase().includes(lowercasedSearchTerm)
        );
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Assuming 'onSearch' is a callback function passed as a prop
  };

  const filteredData = filterFood();

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSearch} className="flex items-center border rounded-md">
        <input
          type="text"
          placeholder="Search properties..."
          className="px-4 py-2 text-sm rounded-l-md focus:outline-none"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="px-4 py-2 text-sm font-bold rounded-r-md bg-blue-500 text-white hover:bg-blue-600">
          Search
        </button>
      </form>
      {filteredData.length > 0 && (
        <ul className="list-none">
          {filteredData.map(({ id, title, image, location }) => (
            <li key={id} className="flex items-center space-x-4">
              <img src={image} alt={`Thumbnail for ${title}`} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-xs text-gray-500">{location}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
