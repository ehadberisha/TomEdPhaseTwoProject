import React from "react";

function Seller({ name, image }) {
  return (
    <div className="seller">
      <div className>
        <img src={image} alt={name} className="card_image" />
        <div className="card_content" />
        <div className="card_title">{name}</div>
        <div className="card_detail"></div>
      </div>
    </div>
  );
}

export default Seller;
