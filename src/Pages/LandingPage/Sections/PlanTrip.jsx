import SelectCar from "../../../images/plan/icon1.png";
import Contact from "../../../images/plan/icon2.png";
import Drive from "../../../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Find your ideaLease with LeaseWise</h3>
              <h2>Compare prices accross suppliers</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Find your Car</h3>
                <p>
                  Find the specifc car model you prefer, comparing prices and
                  available vehicles accross all available lease car suppliers
                  of your country.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contact Supplier</h3>
                <p>
                  Redirect to the suppliers page to complete the lease contract,
                  with the help of our support team if needed!
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Let's Drive</h3>
                <p>
                  Enjoy your new lease contract care free! It's time to hit the
                  road with your new lease car!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
