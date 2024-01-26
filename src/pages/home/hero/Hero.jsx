import React, { useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [rent, setRent] = useState("");
  const [area, setArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePropertyTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleRentChange = (e) => {
    setRent(e.target.value);
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleBedroomsChange = (e) => {
    setBedrooms(e.target.value);
  };

  const handleSearch = () => {
    // Perform search with the selected filters
    // You can use the state variables (location, propertyType, priceRange, rent, area, bedrooms) for your search logic
    console.log("Performing search with filters:", {
      location,
      propertyType,
      priceRange,
      rent,
      area,
      bedrooms,
    });
  };

  return (
    <section className="hero">
      <div className="container">
        <Heading title="Search Your Next Home " subtitle="Find new & featured property " />

        <form className="flex">
          <div className="box">
            
            <input
              type="text"
              id="location"
              placeholder="Enter location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>

          <div className="box">
            <label htmlFor="propertyType"></label>
            <input
              type="text"
              id="propertyType"
              placeholder="Property Type"
              value={propertyType}
              onChange={handlePropertyTypeChange}
            />
          </div>

          <div className="box">
            <label htmlFor="priceRange"></label>
            <input
              type="number"
              id="priceRange"
              placeholder="Price Range"
              value={priceRange}
              onChange={handlePriceRangeChange}
            />
          </div>

          <div className="box">
            <label htmlFor="rent"></label>
            <input
              type="text"
              id="rent"
              placeholder="Rent"
              value={rent}
              onChange={handleRentChange}
            />
             <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
      <option value="monthly">Weekly</option>
      <option value="yearly">Daily</option>
      <option value="monthly">Any</option>

          </div>

          <div className="box">
            <label htmlFor="area"></label>
            <input
              type="text"
              id="area"
              placeholder="Area"
              value={area}
              onChange={handleAreaChange}
            />
          </div>

          <div className="box">
            <label htmlFor="bedrooms"></label>
            <input
              type="text"
              id="bedrooms"
              placeholder="Bedrooms"
              value={bedrooms}
              onChange={handleBedroomsChange}
            />
          </div>

          <button className="btn1" type="button" onClick={handleSearch}>
            <i className="fa fa-search"> Find</i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
