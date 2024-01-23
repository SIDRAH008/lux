import React from 'react';
import "./index.css";

const PropertyPage = () => {
  return (
    <div className="property-page">
      <header>
        <h1>Property Details</h1>
      </header>

      <section className="property-details">
        <h2>Property Name</h2>
        <p>Description of the property goes here.</p>
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Festure 3</li>
          <li>Feature 4 </li>
          <li>Feature 5</li>
                    {/* Add more features as needed */}
        </ul>


        <h2>Price</h2>
        <p>$1,000,000</p>

        {/* Add more details as needed */}
      </section>
    </div>
  );
};

export default PropertyPage;
