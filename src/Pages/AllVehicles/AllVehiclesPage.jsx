import Title from "./Sections/Title";
import FilterBox from "./Sections/FilterBox";
import GridLayout from "./Sections/GridLayout";
import Footer from "./Sections/Footer";
import { useState } from "react";

function AllVehicles() {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Title />
      <div className="vehiclesListingContent">
        <FilterBox handleFilterChange={handleFilterChange} />
        <GridLayout filters={filters} />
      </div>
      <Footer />
    </>
  );
}

export default AllVehicles;
