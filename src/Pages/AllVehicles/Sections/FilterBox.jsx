import { useState } from "react";
import Select from "react-select";

function FilterBox() {
  const [filterValues, setFilterValues] = useState({
    manufacturer: '',
    model: '',
    submodel: '',
    fuel_type:'',
    gear_type:'',
    min_price:''
})

  return (
    <>
      <section className="filters-section">
        <div className="filters-section-box">
          <h2>Search Filters</h2>
          <div className="filters-form">
            <div className="filters-form-field">
              <label>Manufacturer</label>
              <Select className="select" />
            </div>
            <div className="filters-form-field">
              <label>Model</label>
              <Select className="select" />
            </div>
            <div className="filters-form-field">
              <label>Version</label>
              <Select className="select" />
            </div>
            <div className="filters-form-field">
              <label>Model</label>
              <Select className="select" />
            </div>
            <div className="filters-form-field">
              <label>Model</label>
              <Select className="select" />
            </div>
            <div className="filters-form-clear-btn">
              <button className="filters-form-clear-btn">Clear filters</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FilterBox;
