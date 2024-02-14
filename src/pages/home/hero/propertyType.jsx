import React, { useState,useEffect, useRef } from 'react';
import './hero.css';

const PropertyTypeFilter = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Residential');
  const [residentialOptions] = useState([
    'Apartment',
    'Townhouse',
    'Villa Compound',
    'Residential Plot',
    'Residential Building',
    'Villa',
    'Penthouse',
    'Hotel Apartment',
    ' Residential Floor',
  ]);
  const [commercialOptions] = useState([
    'Office',
    'Warehouse',
    'Commercial Villa',
    'Commercial Plot',
    'Commercial Building',
    'Industrial Land',
    'Showroom',
    'Shop',
    'Labour Camp',
    'Bulk Unit',
    'Commercial Floor',
    'Factory',
    'Mixed Use Land',
    'Other Commercial',
    /* Add other commercial options as needed */
  ]);
  const [selectedOption, setSelectedOption] = useState(null);
  const filterRef = useRef(null);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedOption(null); // Reset selected option when changing the category
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false); // Close options container after selecting an option
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="property-type-filter" ref={filterRef}>
      <div className="category-filter" onClick={handleButtonClick}>
        <span className="fontCompensation">{selectedOption || selectedCategory}</span>
        <span className={`arrow-icon ${showOptions ? 'up' : 'down'}`}></span>
      </div>
      {showOptions && (
        <div className="options-container">
          <div className="category-buttons">
            <button
              className={`category-button ${selectedCategory === 'Residential' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Residential')}
            >
              Residential
            </button>
            <button
              className={`category-button ${selectedCategory === 'Commercial' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Commercial')}
            >
              Commercial
            </button>
          </div>
          <div className="category-options">
            {(selectedCategory === 'Residential' ? residentialOptions : commercialOptions).map((option, index) => (
              <div
                className={`category-option ${selectedOption === option ? 'active' : ''}`}
                key={index}
                onClick={() => handleOptionClick(option)}
              >
                {option}
                {selectedOption === option && <span className="arrow-icon right"></span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyTypeFilter;
