import React, { useState, useEffect } from "react";
import SellerList from "./SellerList";

function SellerOtm() {
  const [seller, setSeller] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/cars")
      .then((resp) => resp.json())
      .then((sellerArray) => {
        setSeller(sellerArray);
      });
  }, []);
  return (
    <div className="sellerclass">
      <h1>This Month's Top Sellers</h1>
      <SellerList seller={seller} />
      <p></p>
    </div>
  );
}

export default SellerOtm;
