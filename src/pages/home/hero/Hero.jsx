import React, { useState } from 'react';
import PropertyTypeFilter from './propertyType';
import RentBuyFilter from './rentType';
import BedBathFilter from './bedbath';
import './hero.css';

const SearchFilter = () => {
  const [location, setLocation] = useState('');
  const [showPriceFields, setShowPriceFields] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showAreaFields, setShowAreaFields] = useState(false);
  const [minArea, setMinArea] = useState('');
  const [maxArea, setMaxArea] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePriceFieldClick = () => {
    setShowPriceFields(!showPriceFields);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleAreaFieldClick = () => {
    setShowAreaFields(!showAreaFields);
  };

  const handleMinAreaChange = (event) => {
    setMinArea(event.target.value);
  };

  const handleMaxAreaChange = (event) => {
    setMaxArea(event.target.value);
  };

  return (
  
    <div className="search-filter">
     <h1 className="head">Find Your Dream Home</h1>
     <h5 className='para'>Real Prices. Real Photos. Real Properties</h5>

      <div className="filter-container">
     
        <div className="filter-options">
        <div className="first-row">
          <div className="property-type">
            <PropertyTypeFilter />
          </div>

          <div className="location">
            <input type="text" placeholder="Location" value={location} onChange={handleLocationChange} />
          </div>

          <div className="rent-buy">
            <RentBuyFilter />
          </div>
</div>
<div className="second-row">
          <div className="beds-baths">
            <BedBathFilter />
          </div>

          <div className={`price-field ${showPriceFields ? 'active' : ''}`} onClick={handlePriceFieldClick}>
            <button className='price'>Price(AED)</button>
            {showPriceFields && (
              <div className="price-range">
                <input type="number" value={minPrice} onChange={handleMinPriceChange} placeholder="Min" />
                <input type="number" value={maxPrice} onChange={handleMaxPriceChange} placeholder="Max" />
              </div>
            )}
          </div>

          <div className={`area-field ${showAreaFields ? 'active' : ''}`} onClick={handleAreaFieldClick}>
            <button className='area'>Area(sqft)</button>
            {showAreaFields && (
              <div className="area-container">
                <input type="number" value={minArea} onChange={handleMinAreaChange} placeholder="Min" />
                <input type="number" value={maxArea} onChange={handleMaxAreaChange} placeholder="Max" />
              </div>
            )}
          </div>

          <div className="button">
            <button
              type="button"
              className="btnn"
              onClick={() => console.log('Performing search...')}
            >
              Search
            </button>
          </div>
          </div>
          <div className="third-row">
            <button className="drive">
            Search 2.0 Find home by drive time 
            </button>
          </div>

          
        
      </div>
    </div></div>
  );
};

export default SearchFilter;
