// components/SearchForm.js
import React, { useState } from 'react';
import "./hero.css";

const SearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [rent, setRent] = useState('');
  const [price, setPrice] = useState('');
  const [forRent, setForRent] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [amenities, setAmenities] = useState('');

  const handleSearch = () => {
    // Call the onSearch prop with the current search criteria
    onSearch({ location, rent, price, forRent, bedrooms, propertyType, amenities });
  };

  return (
    <div className="container mx-auto p-4 lg:w-3/4 xl:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="search-input mb-4">
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Any</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
          </select>
        </div>
       
        <div className="search-input mb-4">
          <label htmlFor="price">Price:</label>
          <select
            type="text"
            id="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
             <option value="">Price</option>
            <option value="city1">50,000</option>
            <option value="city2">70,000</option>
            <option value="city2">80,000</option>
            <option value="city2">90,000</option>
            </select>
        </div>
        <div className="search-input mb-4">
          <label htmlFor="forRent">For Rent:</label>
          <select
            id="forRent"
            value={forRent}
            onChange={(e) => setForRent(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Rent</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="search-input mb-4">
          <label htmlFor="bedrooms">Bedrooms:</label>
          <select
            id="bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Bad&Baths</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="search-input mb-4">
          <label htmlFor="propertyType">Property Type:</label>
          <select
            id="propertyType"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
          </select>
        </div>
       
      </div>
      <button
        type="button"
        onClick={handleSearch}
        className="mt-4 bg-blue-500 text-white p-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
