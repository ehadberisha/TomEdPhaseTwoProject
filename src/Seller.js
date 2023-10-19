import React from "react";

function Seller({ sellerName, sellerImage }) {
  return (
    <div className="seller">
      <div className>
        <img src={sellerImage} alt={sellerName} className="card_image" />
        <div className="card_content" />
        <div className="card_title">{sellerName}</div>
        <div className="card_detail"></div>
      </div>
    </div>
  );
}

export default Seller;
