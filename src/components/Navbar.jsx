import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  // var scrollPosition = window.scrollY || window.pageYOffset;
  // header.classList.toggle("scrolled", scrollPosition > 100);

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/all-vehicles">
                List all Vehicles
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}
        <div className={"navbar" + (scrolled ? " isScrolled" : "")}>
          <div className="navbar__content">
            <div className="navbar__content__img">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="logo-img" />
              </Link>
            </div>
            <ul className="navbar__content__links">
              <li>
                <Link className="models-link" to="/all-vehicles">
                  List all Vehicles
                </Link>
              </li>
            </ul>
            {/* <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Register
            </Link>
          </div> */}

            {/* mobile */}
            <div className="mobile-hamb" onClick={openNav}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
