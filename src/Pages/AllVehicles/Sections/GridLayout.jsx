import { fetchVehicles } from "../../../api/fetchVehicles";
import Listing from "./Listing";
import Vehicle from "../../../constructors/vehicle";
import { useQuery } from "react-query";

function GridLayout() {
  const {
    data: fetchedVehicles,
    isLoading,
    error,
    refetch,
  } = useQuery("allVehicles", () => fetchVehicles());

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
            const formatedVehicle = new Vehicle().fromJson(vehicle);
            return (
              <Listing
                key={i}
                manufacturer={formatedVehicle.manufacturer}
                model={formatedVehicle.model}
                fuel_type={formatedVehicle.fuel_type}
                price={formatedVehicle.min_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GridLayout;
