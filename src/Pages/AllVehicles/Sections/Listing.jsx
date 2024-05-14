import PropTypes from "prop-types";

const Listing = (props) => {
  const { manufacturer, model, fuel_type, price } = props;

  // const manufacturer = "Peugot";
  // const model = "208 Ti Eco Super";
  // const fuel = "Petrol";
  // const price = 230;

  return (
    <>
      <div className="listing">
        <div className="listing-content">
          <div className="listing-content-image">
            <img
              alt={`${manufacturer} ${model}`}
              src="https://cdn.imagin.studio/getImage?make=renault&modelFamily=clio&modelRange=clio&modelVariant=ha&bodySize=5&transmission=0&paintId=143400&paintDescription=white&angle=01&customer=lpl&zoomType=relative&width=400&zoomLevel=12&tailoring=leaseplan&modelYear=2024&powerTrain=hybrid&trim=eu"
            />
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
          <button className="listing-content-btn">View this offer</button>
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
