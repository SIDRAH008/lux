import React, { useState } from 'react';
import Select from 'react-select';
import './hero.css';

const bedsOptions = [
  { value: 'studio', label: 'Studio' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6+', label: '6+' },
];

const bathsOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6+', label: '6+' },
];

const options = [
  { label: 'Beds', options: bedsOptions },
  { label: 'Baths', options: bathsOptions },
];

const commercialTypeOptions = [
  { value: 'land', label: 'Land' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'House' },
];

const residentialTypeOptions = [
  { value: 'office', label: 'office' },
  { value: 'plots', label: 'plots' },
  { value: 'factory', label: 'factory' },
];

const propertyTypeOptions = [
  { label: 'Commercial', options: commercialTypeOptions },
  { label: 'Residential', options: residentialTypeOptions },
];

const buyRentOptions = [
  { value: 'rent', label: 'Rent' },
  { value: 'buy', label: 'Buy' },
];

const SearchFilter = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedBuyRent, setSelectedBuyRent] = useState(null);
  const [location, setLocation] = useState('');
  const [showPriceFields, setShowPriceFields] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showAreaFields, setShowAreaFields] = useState(false);
  const [minArea, setMinArea] = useState('');
  const [maxArea, setMaxArea] = useState('');

  const handleOptionsChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const handlePropertyTypeChange = (selectedOption) => {
    setSelectedPropertyType(selectedOption);
  };

  const handleBuyRentChange = (selectedOption) => {
    setSelectedBuyRent(selectedOption);
  };

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

  const handleButtonClick = () => {
    // Perform search based on selected filters
    console.log('Performing search...');
  };

  return (
    <div className="search-filter">
      <div className='background'>
      <div className="filter-container">
        <div className="filter-options">
          <div className="row">
            <div className="column">
              <div className="select-field">
                <label>Bed/Bath</label>
                <Select
                  options={options}
                  isSearchable={false}
                  closeMenuOnSelect={false}
                  isMulti
                  value={selectedOptions}
                  onChange={handleOptionsChange}
                />
              </div>
            </div>
            <div className="column">
              <div className="location-field">
                <label>Location</label>
                <input type="text" value={location} onChange={handleLocationChange} />
              </div>
            </div>
            <div className="column">
              <div className="select-field">
                <label>Rent/Buy</label>
                <Select
                  options={buyRentOptions}
                  isSearchable={false}
                  value={selectedBuyRent}
                  onChange={handleBuyRentChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="select-field">
                <label>Property Type</label>
                <Select
                  options={propertyTypeOptions}
                  isSearchable={false}
                  value={selectedPropertyType}
                  onChange={handlePropertyTypeChange}
                />
              </div>
            </div>
            <div className="column">
              <div className="price-field" onClick={handlePriceFieldClick}>
                <label>Price</label>
                <br />
                <button>Price(AED)</button>
                {showPriceFields && (
                  <div className="price-range">
                    <input type="number" value={minPrice} onChange={handleMinPriceChange} placeholder="Min" />
                    <input type="number" value={maxPrice} onChange={handleMaxPriceChange} placeholder="Max" />
                  </div>
                )}
              </div>
            </div>
            <div className="column">
              <div className="area-field" onClick={handleAreaFieldClick}>
                <label>Area(sqft)</label>
                <br />
                <button>Area</button>
                {showAreaFields && (
                  <div className="area-container">
                    <input type="number" value={minArea} onChange={handleMinAreaChange} placeholder="Min" />
                    <input type="number" value={maxArea} onChange={handleMaxAreaChange} placeholder="Max" />
                  </div>
                )}
              </div>
            </div>
          </div>
         
            <div  className="button" >
            <button type="button" className="btn " onClick={handleButtonClick}>
              Search
            </button>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
