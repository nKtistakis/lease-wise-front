import { useEffect, useState } from "react";
import Select from "react-select";
import queryOptions from "../../../enums/query_options";
import ArrowImg from "../../../images/download/arrow.png";

function FilterBox({ handleFilterChange }) {
  const [filterValues, setFilterValues] = useState({
    manufacturer: null,
    "characteristcs.professional": null,
    "characteristcs.fuel_type": null,
    "characteristcs.gear_type": null,
    min_price: null,
  });

  const [ascSelect, setAscSelect] = useState(false);
  const [descSelect, setDescSelect] = useState(false);

  useEffect(() => {
    const filtersToPass = {};
    for (const filter in filterValues) {
      if (filterValues[filter]) {
        // Check if the filter is min_price and treat it as a string
        if (filter === "min_price") {
          filtersToPass[filter] = filterValues[filter]; // Pass asc or desc directly
        } else {
          filtersToPass[filter] = filterValues[filter].value; // Handle other filters as objects with value
        }
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

  const handleOrderChange = (name) => {
    if (name === "asc") {
      setAscSelect(true);
      setDescSelect(false);
      setFilterValues((prevValues) => ({
        ...prevValues,
        min_price: "asc",
      }));
    } else if (name === "desc") {
      setAscSelect(false);
      setDescSelect(true);
      setDescSelect(true);
      setFilterValues((prevValues) => ({
        ...prevValues,
        min_price: "desc",
      }));
    }
  };

  const handleClearFilter = () => {
    setFilterValues(() => ({
      manufacturer: null,
      "characteristcs.professional": null,
      "characteristcs.fuel_type": null,
      "characteristcs.gear_type": null,
      min_price: null,
    }));
    setAscSelect(false);
    setDescSelect(false);
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
              <label>Price sort</label>
              <div className="filters-form-order-btns">
                <button
                  name="asc"
                  className={ascSelect ? "selected" : ""}
                  onClick={() => handleOrderChange("asc")}
                >
                  <img src={ArrowImg} alt="arrow up" />
                </button>
                <button
                  name="desc"
                  className={descSelect ? "selected" : ""}
                  onClick={() => handleOrderChange("desc")}
                >
                  <img className="desc" src={ArrowImg} alt="arrow down" />
                </button>
              </div>
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
