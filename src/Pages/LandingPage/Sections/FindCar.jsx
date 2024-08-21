import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

function FindCar() {
  const [searchToogle, setSearchToogle] = useState(true);
  const [values, setValues] = useState({
    manufacturer: null,
    model: null,
    version: null,
    keyword: null,
  });

  const handleChange = (option, actionMeta) => {
    setValues((prevValues) => ({
      ...prevValues,
      [actionMeta.name]: option,
    }));
  };

  const handleToogleChange = () => {
    setSearchToogle(!searchToogle);
  };

  const manufacters = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];

  function SearchBar() {
    return (
      <div className="search-content__box">
        <h2>Search a Car</h2>

        <p className="info_text">
          Please search below by inputing a manufacturer, a car model or any
          keyword related to your search. <br /> (Empty search will list{" "}
          <span>all</span> vehicles)
        </p>

        <p className="error-message">
          All fields required! <i className="fa-solid fa-xmark"></i>
        </p>

        <form className="form-elements__searchbar">
          <label>Select Your Car Type</label>
          <CreatableSelect
            value={values.keyword}
            name="keyword"
            onChange={handleChange}
            options={manufacters}
          />
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className={
              values.keyword?.value != null ? "button" : "button-disabled"
            }
            to={`/results?keyword=${values.keyword?.value ?? ""}`}
          >
            Search
          </Link>
        </form>
      </div>
    );
  }

  function Form() {
    return (
      <div className="search-content__box">
        <h2>Choose what car suits you best from the options below</h2>

        <p className="error-message">
          All fields required! <i className="fa-solid fa-xmark"></i>
        </p>

        <form className="form-elements">
          <div className="form-elements__form-selects">
            <div className="element">
              <label>Manufacturer </label>
              <Select
                name="manufacturer"
                value={values.manufacturer}
                onChange={handleChange}
                options={manufacters}
              />
            </div>
            <div className="element">
              <label>Model</label>
              <Select
                isDisabled={values.manufacturer?.value == null ?? true}
                name="model"
                value={values.model}
                onChange={handleChange}
                options={manufacters}
              />
            </div>
            <div className="element">
              <label>Version</label>
              <Select
                isDisabled={values.model?.value == null ?? true}
                name="version"
                value={values.version}
                onChange={handleChange}
                options={manufacters}
              />
            </div>
          </div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className={
              values.manufacturer?.value != null ? "button" : "button-disabled"
            }
            to={`/results?manufacturer=${
              values.manufacturer?.value ?? ""
            }&model=${values.model?.value ?? ""}&version=${
              values.version?.value ?? ""
            }`}
          >
            Search
          </Link>
        </form>
      </div>
    );
  }

  return (
    <section id="search-section" className="search-section">
      <div className="container">
        <div className="toggles">
          <button className="toggles__search_btn" onClick={handleToogleChange}>
            Searchbar
          </button>
          <button className="toggles__form_btn" onClick={handleToogleChange}>
            Car Form
          </button>
        </div>
        <div className="search-content">
          {searchToogle ? <SearchBar /> : <Form />}
        </div>
      </div>
    </section>
  );
}

export default FindCar;
