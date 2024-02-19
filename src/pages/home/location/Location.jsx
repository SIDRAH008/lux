import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DubaiRealEstate = () => {
  const [dubaiApartments, setDubaiApartments] = useState([]);
  const [abuDhabiApartments, setAbuDhabiApartments] = useState([]);
  const [otherEmiratesApartments, setOtherEmiratesApartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://my-api.com/properties');
      setDubaiApartments(result.data.dubaiApartments);
      setAbuDhabiApartments(result.data.abuDhabiApartments);
      setOtherEmiratesApartments(result.data.otherEmiratesApartments);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="page-container">
      <div className="search-bar">
        <input type="text" value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="property-listings">
        {dubaiApartments.filter((apartment) => 
          apartment.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((apartment) => (
          <div key={apartment.id} className="property-item">
            <h3>{apartment.name}</h3>
            <p>{apartment.location}</p>
            <p>{apartment.price}</p>
          </div>
        ))}
      </div>
      <div className="property-listings">
        {abuDhabiApartments.filter((apartment) => 
          apartment.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((apartment) => (
          <div key={apartment.id} className="property-item">
            <h3>{apartment.name}</h3>
            <p>{apartment.location}</p>
            <p>{apartment.price}</p>
          </div>
        ))}
      </div>
      <div className="property-listings">
        {otherEmiratesApartments.filter((apartment) => 
          apartment.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((apartment) => (
          <div key={apartment.id} className="property-item">
            <h3>{apartment.name}</h3>
            <p>{apartment.location}</p>
            <p>{apartment.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DubaiRealEstate;