import { useEffect, useState } from "react";
import Select from "react-select";
import queryOptions from "../../../enums/query_options";
function FilterBox({ handleFilterChange }) {
  const [filterValues, setFilterValues] = useState({
    manufacturer: null,
    "characteristcs.professional": null,
    "characteristcs.fuel_type": null,
    "characteristcs.gear_type": null,
    min_price: "",
    max_price: "",
  });

  useEffect(() => {
    const filtersToPass = {};
    for (const filter in filterValues) {
      if (filterValues[filter]) {
        filtersToPass[filter] = filterValues[filter].value;
      }
    }
    handleFilterChange(filtersToPass);
  }, [filterValues]);

  const handleChange = (option, actionMeta) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [actionMeta.name]: option,
    }));
  };

  const handleClearFilter = () => {
    setFilterValues(() => ({
      manufacturer: null,
      "characteristcs.professional": null,
      "characteristcs.fuel_type": null,
      "characteristcs.gear_type": null,
      min_price: "",
      max_price: "",
    }));
  };

  return (
    <>
      <section className="filters-section">
        <div className="filters-section-box">
          <h2>Search Filters</h2>
          <div className="filters-form">
            <div className="filters-form-field">
              <label>Manufacturer</label>
              <Select
                className="select"
                name="manufacturer"
                value={filterValues.manufacturer}
                onChange={handleChange}
                options={queryOptions.manufacturers}
              />
            </div>
            <div className="filters-form-field">
              <label>Fuel Type</label>
              <Select
                className="select"
                name="characteristcs.fuel_type"
                value={filterValues["characteristcs.fuel_type"]}
                onChange={handleChange}
                options={queryOptions.fuel}
              />
            </div>
            <div className="filters-form-field">
              <label>Gearbox</label>
              <Select
                className="select"
                name="characteristcs.gear_type"
                value={filterValues["characteristcs.gear_type"]}
                onChange={handleChange}
                options={queryOptions.gear}
              />
            </div>
            <div className="filters-form-field">
              <label>Price: From</label>
              <Select
                className="select"
                name="min_price"
                value={filterValues["min_price"]}
                onChange={handleChange}
              />
            </div>
            <div className="filters-form-field">
              <label>Price: To</label>
              <Select
                className="select"
                name="max_price"
                value={filterValues.max_price}
                onChange={handleChange}
              />
            </div>
            <div className="filters-form-clear-btn">
              <button
                className="filters-form-clear-btn"
                onClick={handleClearFilter}
              >
                Clear filters
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FilterBox;
