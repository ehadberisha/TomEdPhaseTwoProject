import React from "react";
import SellerOtm from "./SellerOtm";
import Seller from "./Seller";

function SellerList({ seller }) {
  const renderSeller = seller.map((sellerObj) => {
    return <sellerCard name={sellerObj.name} image={sellerObj.image} />;
  });
  return <ul className="cards">{renderSeller}</ul>;
}
export default SellerList;
 