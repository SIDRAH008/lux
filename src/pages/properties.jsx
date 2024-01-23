import { useState, useEffect } from "react";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/api/properties')
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <ul>
      {properties.map((property) => (
        <li key={property.id}>
          {property.title} ({property.type}) - {property.price}
        </li>
      ))}
    </ul>
  );
};

export default PropertyList;
