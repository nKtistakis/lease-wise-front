function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                Lease<span>Wise</span>
              </li>
              <li>
                Explore LeaseWise's extensive selection of vehicle leases
                tailored for every driving preference, from city commutes to
                luxury journeys. Find your ideal car with us and drive with
                confidence, knowing you've secured the best deal to suit your
                lifestyle.
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Sitemap</li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#search-section">Find your lease</a>
              </li>
              <li>
                <a href="#home">FAQ</a>
              </li>
              <li>
                <a href="#home">All Vehicles</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Contact Details</li>
              <li>
                <span>Phone:</span> +30 210 9999999
              </li>
              <li>Omirou 9, Tauros, Athens</li>
              <li>
                <span>Email:</span> it21732@hua.gr
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
