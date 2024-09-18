import React from "react";
import { useLocation } from "react-router-dom";

const VehicleDetail = () => {
  const location = useLocation();
  const vehicle = location.state?.vehicle; // Access the vehicle data from state

  if (!vehicle) {
    return <p>No vehicle data found.</p>;
  }
  console.log(vehicle);

  const {
    image,
    manufacturer,
    model,
    fuel_type,
    engine_power,
    gear_type,
    horsepower,
    price,
    listing_url,
  } = vehicle;

  return (
    <div className="vehicle-detail">
      <header>
        <h1>{`${manufacturer} ${model}`}</h1>
      </header>
      <div className="vehicle-gallery">
        <img alt={`${manufacturer} ${model}`} src={image} />
      </div>
      <section className="vehicle-info">
        <h2>Vehicle's Characteristics</h2>
        <ul>
          <li>
            <strong>Fuel Type:</strong> {fuel_type}
            {fuel_type ? fuel_type : "No Data Available"}
          </li>
          <li>
            <strong>Gear Type:</strong> {gear_type}
            {gear_type ? gear_type : "No Data Available"}
          </li>
          <li>
            <strong>Horsepower:</strong>
            {horsepower ? horsepower : "No Data Available"}
          </li>
          <li>
            <strong>Engine Power:</strong>
            {engine_power ? engine_power : "No Data Available"}
          </li>
          <li>
            <strong>Price:</strong> {price} € (VAT excl.)
          </li>
        </ul>
      </section>
      <div className="cta-button">
        <button>
          <a href={listing_url} target="_blank" rel="noopener noreferrer">
            View this offer
          </a>
        </button>
      </div>
    </div>
  );
};

export default VehicleDetail;
