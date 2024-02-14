import React, { useState, useEffect, useRef } from 'react';
import './hero.css';

const BedBathFilter = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedBed, setSelectedBed] = useState([]);
  const [selectedBath, setSelectedBath] = useState([]);
  const bedOptions = ['beds', '1', '2', '3', '4', '5', '6+'];
  const bathOptions = ['baths', '1', '2', '3', '4', '5', '6+'];
  const filterRef = useRef(null);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleBedClick = (bed) => {
    setSelectedBed((prevSelectedBed) => {
      if (prevSelectedBed.includes(bed)) {
        return prevSelectedBed.filter((selected) => selected !== bed);
      } else {
        return [...prevSelectedBed, bed];
      }
    });
  };

  const handleBathClick = (bath) => {
    setSelectedBath((prevSelectedBath) => {
      if (prevSelectedBath.includes(bath)) {
        return prevSelectedBath.filter((selected) => selected !== bath);
      } else {
        return [...prevSelectedBath, bath];
      }
    });
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
    <div className="bed-bath-filter" ref={filterRef}>
      <div className="category-filter" onClick={handleButtonClick}>
        <span className="fontCompensation">
          {`${selectedBed.length > 0 ? selectedBed.join(', ') : 'Beds'}, ${
            selectedBath.length > 0 ? selectedBath.join(', ') : 'Baths'
          }`}
        </span>
        <span className={`arrow-icon ${showOptions ? 'up' : 'down'}`}></span>
      </div>
      {showOptions && (
        <div className="options-container">
          <div className="bed-options">
            {bedOptions.map((bed, index) => (
              <div
                className={`bed-option ${selectedBed.includes(bed) ? 'active' : ''}`}
                key={index}
                onClick={() => handleBedClick(bed)}
              >
                {bed}
              </div>
            ))}
          </div>
          <div className="bath-options">
            {bathOptions.map((bath, index) => (
              <div
                className={`bath-option ${selectedBath.includes(bath) ? 'active' : ''}`}
                key={index}
                onClick={() => handleBathClick(bath)}
              >
                {bath}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BedBathFilter;
