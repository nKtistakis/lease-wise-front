import Title from "./Sections/Title";
import FilterBox from "./Sections/FilterBox";
import GridLayout from "./Sections/GridLayout";
import Footer from "./Sections/Footer";

function AllVehicles() {
  return (
    <>
      <Title />
      <div className="vehiclesListingContent">
        <FilterBox />
        <GridLayout />
      </div>
      <Footer />
    </>
  );
}

export default AllVehicles;
