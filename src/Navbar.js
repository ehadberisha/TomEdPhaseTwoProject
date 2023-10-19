import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbarclass">
      <ul>
        <p>
          <Link to="/SearchList">Home Page</Link>
        </p>
        <p>
          <Link to="/SellerOtm">Sellers Of The Month</Link>
        </p>
        <p>
          <Link to="/AboutUs">About Us</Link>
        </p>
      </ul>
    </nav>
  );
}

export default Navbar;
