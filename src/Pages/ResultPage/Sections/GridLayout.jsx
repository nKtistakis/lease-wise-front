import { getVehicles } from "../../../api/index.js";
import Listing from "./Listing";
import Vehicle from "../../../constructors/vehicle";
import { useQuery } from "react-query";

function GridLayout() {
  const {
    data: fetchedVehicles,
    isLoading,
    error,
    refetch,
  } = useQuery("allVehicles", async () => await getVehicles());

  if (isLoading) {
    console.log("loading");
    return <span>Loading...</span>;
  }

  if (error) {
    return <p className="error">{error.message}</p>;
  }

  return (
    <>
      <div className="gridlayout-section">
        <div className="gridlayout-section-content">
          {fetchedVehicles.map((vehicle, i) => {
            return (
              <Listing
                key={i}
                manufacturer={vehicle.manufacturer}
                model={vehicle.model}
                fuel_type={vehicle.characteristcs.fuel_type}
                price={vehicle.min_price}
                image={vehicle.image}
                listing_url={vehicle.listing_url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GridLayout;
