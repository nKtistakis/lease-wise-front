import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Listing from "./Listing";
import { getVehicles } from "../../../api/index.js";

function GridLayout({ filters }) {
  const [vehicles, setVehicles] = useState([]); // Store the cumulative list of vehicles
  const [cursor, setCursor] = useState(1); // Track the current cursor

  const fetchVehicles = async () => {
    const query = new URLSearchParams({
      ...filters,
      cursor: cursor,
    }).toString();

    return await getVehicles(`?${query}`);
  };

  const { data, isLoading, error, refetch } = useQuery(
    ["allVehicles", filters, cursor], // Include filters and cursor in query key
    fetchVehicles,
    {
      keepPreviousData: false, // Keep the previous data while fetching new data
      retry: 2,
      onError: (err) => {
        console.error("Error fetching vehicles:", err);
      },
    }
  );

  useEffect(() => {
    if (data && data.results) {
      setVehicles((prevVehicles) =>
        cursor === 0 ? data.results : [...prevVehicles, ...data.results]
      );
    }
  }, [data, cursor]);

  useEffect(() => {
    setCursor(1); // Reset cursor when filters change
    setVehicles([]); // Clear the current vehicles list when filters change
    refetch(); // Refetch data when filters change
  }, [filters, refetch]);

  const handleNextClick = () => {
    if (data.cursor !== null) {
      setCursor(data.cursor); // Set the cursor from the API response for the next fetch
    }
  };

  if (isLoading && vehicles.length === 0) {
    return <span>Loading...</span>; // Show loading only when there are no vehicles to display
  }

  if (error) {
    return (
      <div className="error">
        <p>Failed to load vehicles. Please try again later.</p>
        <pre>{error.message}</pre>
      </div>
    );
  }

  if (!vehicles || vehicles.length === 0) {
    return (
      <div className="error">
        <p>No vehicles found.</p>
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
              price={vehicle.min_price}
              image={vehicle.image}
              listing_url={vehicle.listing_url}
            />
          ))}
        </div>
        <button
          className="gridlayout-section-btn"
          onClick={handleNextClick}
          disabled={!data?.cursor} // Disable button if cursor is null (no more pages)
        >
          {"---->      Load more deals      <-----"}
        </button>
      </div>
    </>
  );
}

export default GridLayout;
