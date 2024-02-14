import React, { useState, useEffect, useRef } from 'react';
import './hero.css';

const RentBuyFilter = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Rent');
  const [RentOptions] = useState(['Yearly', 'monthly', 'weekly', 'daily']);
  const [BuyOptions] = useState(['All', 'Ready', 'Off Plan']);
  const [selectedOption, setSelectedOption] = useState(null);
  const filterRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedOption(null); // Reset selected option when changing the category
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false); // Close options container after selecting an option
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="property-type-filter" ref={filterRef}>
      <div className="category-filter" onClick={() => setShowOptions(!showOptions)}>
        <span className="fontCompensation">{selectedOption || selectedCategory}</span>
        <span className={`arrow-icon ${showOptions ? 'up' : 'down'}`}></span>
      </div>
      {showOptions && (
        <div className="options-container">
          <div className="category-buttons">
            <button
              className={`category-button ${selectedCategory === 'Rent' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Rent')}
            >
              Rent
            </button>
            <button
              className={`category-button ${selectedCategory === 'Buy' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Buy')}
            >
              Buy
            </button>
          </div>
          <div className="category-options">
            {(selectedCategory === 'Rent' ? RentOptions : BuyOptions).map((option, index) => (
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

export default RentBuyFilter;
