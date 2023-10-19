import React from "react";
import SellerOtm from "./SellerOtm";
import Seller from "./Seller";

function SellerList({ sellers }) {
  const renderSeller = sellers.map((sellerObj) => {
    return <Seller name={sellerObj.name} image={sellerObj.image} />;
  });
  return <ul className="cards">{renderSeller}</ul>;
}
export default SellerList;
 