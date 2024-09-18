import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Listing from "./Listing";
import { getVehicles } from "../../../api/index.js";

function GridLayout({ filters }) {
  const [vehicles, setVehicles] = useState([]); // Store the cumulative list of vehicles
  const [cursor, setCursor] = useState(1); // Track the current cursor

  const fetchVehicles = async () => {
    const { min_price, ...queryParams } = filters;

    if (min_price) {
      queryParams.order = min_price; // "asc" or "desc"
      queryParams.sort = "min_price"; // Always sort by min_price
    }

    const query = new URLSearchParams({
      ...queryParams,
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
      onSuccess: (data) => {
        if (data && data.results) {
          setVehicles((prevVehicles) =>
            cursor === 0 ? data.results : [...prevVehicles, ...data.results]
          );
        }
      },
      onError: (err) => {
        console.error("Error fetching vehicles:", err);
      },
    }
  );

  useEffect(() => {
    setCursor(1);
    setVehicles([]);
    refetch();
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

  console.log(vehicles);

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
