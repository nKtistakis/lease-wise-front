import PropTypes from "prop-types";

const Listing = (props) => {
  const { manufacturer, model, fuel_type, image, price, listing_url } = props;

  // const manufacturer = "Peugot";
  // const model = "208 Ti Eco Super";
  // const fuel = "Petrol";
  // const price = 230;

  return (
    <>
      <div className="listing">
        <div className="listing-content">
          <div className="listing-content-image">
            <img alt={`${manufacturer} ${model}`} src={image} />
          </div>
          <div className="listing-content-information">
            <h4>{manufacturer}</h4>
            <h5>{model}</h5>
            <p className="listing-content-information-fuel">
              Fuel Type: {fuel_type}
            </p>
            <p className="listing-content-information-price">
              <span>(VAT excl.) </span>
              {price + "  "} €
            </p>
          </div>
          <button className="listing-content-btn">
            <a href={listing_url} target="_blank">
              View this offer
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

Listing.propTypes = {
  manufacturer: PropTypes.string,
  model: PropTypes.string,
  fuel: PropTypes.string,
  price: PropTypes.number,
};

export default Listing;
