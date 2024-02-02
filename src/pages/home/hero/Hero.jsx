import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import Multiselect from 'multiselect-react-dropdown';
//import classes from './hero.module.css';
import './hero.css';

const Hero = () => {
  const [type, setType] = useState('beach');
  const [continent, setContinent] = useState('0');
  const [priceRange, setPriceRange] = useState('0');
  const navigate = useNavigate();
  const [selectedBeds, setSelectedBeds] = useState(null);
  const [selectedBaths, setSelectedBaths] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  
  const options = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSelect = (selectedList, selectedItem) => {
    setSelectedOptions(selectedList);
  };

  const onRemove = (selectedList, removedItem) => {
    setSelectedOptions(selectedList);
  };


  const handleTypeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);
  };

  const handleLabelClick = () => {
    setIsInputVisible(true);
  };

  const handleOptionClick = (type, value) => {
    if (type === 'beds') {
      setSelectedBeds(value);
    } else if (type === 'baths') {
      setSelectedBaths(value);
    }
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    // Navigating to properties
    navigate(`/properties?type=${type}&continent=${continent}&priceRange=${priceRange}`);
  };

  const renderBuyOptions = () => {
    return (
      <>
        <option className="parent-option" value="ready">Ready</option>
        <option className="child-option" value="off-plan">Off-Plan</option>
        <option className="child-option" value="all">All</option>
      </>
    );
  };
  const renderRentOptions = () => {
    return (
      <>
        <option className="child-option" value="yearly">Yearly</option>
        <option className="child-option" value="monthly">Monthly</option>
        <option className="child-option" value="weekly">Weekly</option>
      </>
    );
  };

  return (
    <div className="containers">
      <div className="wrapper">
        <h2>Let me find your dream place right now</h2>
        <h5>Search the best selection of luxury real estate</h5>
        <div className="options">
  
        <select className="options-container" onChange={handleTypeChange}>
          <option className="parent-option" value="0" disabled>Select type</option>
          <option className="parent-option" value="buy">Buy</option>
          {selectedType === 'buy' && renderBuyOptions()}
          <option className="parent-option" value="rent">Rent</option>
          {selectedType === 'rent' && renderRentOptions()}
        </select>
      
          <select className="location">
            <option className="parent-option" value="1">city1</option>
            <option className="child-option" value="1">city2</option>
            <option className="child-option" value="2">city3</option>
            <option className="child-option" value="3">city4</option>
            <option className="parent-option" value="2">city5</option>
            <option className="child-option" value="1">city6</option>
            <option className="child-option" value="2">city7</option>
            <option className="child-option" value="3">city8</option>
          </select>
          <br />
          <select className="options-container">
            <option className="parent-option" value="1">0-10,000</option>
            <option className="child-option" value="1">10,000-20,000</option>
            <option className="child-option" value="2">20,000-40,000</option>
            <option className="child-option" value="3">40,000-60,000</option>
            <option className="parent-option" value="2">60,000-0,000</option>
         
          </select>
          <select className="options-container">
            <option className="parent-option" value="1">Residential</option>
            <option className="child-option" value="1">Apartments</option>
            <option className="child-option" value="2">Villas</option>
            <option className="child-option" value="3">Plots</option>
            <option className="parent-option" value="2">Commercial</option>
            <option className="child-option" value="1">Office</option>
            <option className="child-option" value="2">Shop</option>
            <option className="child-option" value="3">Warehouse</option>
          </select>
          <div className="dropdown-container">
          <button className="dropdown-trigger" onClick={handleToggle}>
            {selectedBeds && selectedBaths
              ? `${selectedBeds} Beds & ${selectedBaths} Baths`
              : 'Select Beds & Baths'}
          </button>
          {isOpen && (
            <div className="dropdown-options">
              <div className="dropdown-option">
                <h4>Beds</h4>
                <select className="baths-container">
            <option className="parent-option" value="1">Beds</option>
            <option className="child-option" value="1">1</option>
            <option className="child-option" value="1">2</option>
            <option className="child-option" value="2">3</option>
            <option className="child-option" value="3">4</option>
            <option className="child-option" value="2">5</option>
            <option className="child-option" value="1">6+</option>
           
          </select>
                             </div>
                          

<div className="dropdown-option">
  <h4>Baths</h4>
  <select className="bath-container">
    <option className="parent-option" value="1">Baths</option>
    <svg
    viewBox="0 0 100 100" // Add your desired viewBox dimensions here
    className="custom-svg"
  >
    {/* Your SVG content for Baths */}
    <circle cx="50" cy="50" r="40" />
    {/* Add more SVG elements as needed */}
  
    <option className="child-option" value="1">1</option>
    <option className="child-option" value="1">2</option>
    <option className="child-option" value="2">3</option>
    <option className="child-option" value="3">4</option>
    <option className="child-option" value="2">5</option>
    <option className="child-option" value="1">6+</option></svg>
  </select>

</div>




            </div>
          )}
         
        </div>
      
       
        


        <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
      </div>
    </div> </div>
  );
};

export default Hero;
