import { useState, useEffect } from "react";
import Listing from "./Listing";
import { getVehicles } from "../../../api/index.js";

function GridLayout({ filters }) {
  const [vehicles, setVehicles] = useState([]); // Store the cumulative list of vehicles
  const [cursor, setCursor] = useState(1); // Track the current cursor
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track error state
  const [hasMore, setHasMore] = useState(true); // Track if there are more vehicles to load

  // Fetch vehicles function
  const fetchVehicles = async () => {
    setLoading(true);
    setError(null); // Clear previous errors

    const { min_price, ...queryParams } = filters;

    if (min_price) {
      queryParams.order = min_price; // "asc" or "desc"
      queryParams.sort = "min_price"; // Always sort by min_price
    }

    const query = new URLSearchParams({
      ...queryParams,
      cursor: cursor,
    }).toString();

    try {
      const data = await getVehicles(`?${query}`);

      // If data exists, update vehicles state
      if (data && data.results) {
        setVehicles((prevVehicles) =>
          cursor === 1 ? data.results : [...prevVehicles, ...data.results]
        );
        setHasMore(data.cursor !== null); // Check if there are more pages to load
      }
    } catch (err) {
      setError(err); // Handle the error
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  // Fetch vehicles when filters or cursor changes
  useEffect(() => {
    fetchVehicles();
  }, [filters, cursor]);

  // Reset vehicles and cursor when filters change
  useEffect(() => {
    setCursor(1);
    setVehicles([]);
  }, [filters]);

  const handleNextClick = () => {
    if (hasMore) {
      setCursor((prevCursor) => prevCursor + 1); // Increment cursor for pagination
    }
  };

  if (loading) {
    return <span>Loading...</span>; // Show loading only when there are no vehicles to display
  }

  if (vehicles.length === 0) {
    return (
      <div className="error">
        <p>No vehiles in our database with these filters!</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Failed to load vehicles. Please try again later.</p>
        <pre>{error.message}</pre>
      </div>
    );
  }

  return (
    <>
      <div className="gridlayout-section">
        <div className="gridlayout-section-content">
          {vehicles.map((vehicle, i) => (
            <Listing
              key={i}
              manufacturer={vehicle.manufacturer}
              model={vehicle.model}
              fuel_type={vehicle.characteristcs.fuel_type}
              engine_power={vehicle.characteristcs.engine_power}
              gear_type={vehicle.characteristcs.gear_type}
              horsepower={vehicle.characteristcs.horsepower}
              price={vehicle.min_price}
              image={vehicle.image}
              listing_url={vehicle.listing_url}
            />
          ))}
        </div>
        {hasMore && (
          <button
            className="gridlayout-section-btn"
            onClick={handleNextClick}
            disabled={loading} // Disable the button while loading
          >
            {"---->      Load more deals      <-----"}
          </button>
        )}
      </div>
    </>
  );
}

export default GridLayout;
