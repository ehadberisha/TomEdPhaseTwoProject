import React, { useState, useEffect } from "react";
import SellerList from "./SellerList";

function SellerOtm() {
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/sellers")
      .then((resp) => resp.json())
      .then((sellerArray) => {
        setSellers(sellerArray);
      });
  }, []);
  return (
    <div className="sellerclass">
      <h1>This Month's Top Sellers</h1>
      <SellerList sellers={sellers} />
      <p></p>
    </div>
  );
}

export default SellerOtm;
