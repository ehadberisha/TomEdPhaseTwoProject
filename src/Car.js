import React, { useState } from "react";

function Car({ brand, model, color, price, year, image }) {
  const [isSold, setIsSold] = useState(false);

  const handleBuy = () => {
    setIsSold(true);
    window.alert(`Congratulations! You've purchased the ${brand} ${model}.`);
  };

  return (
    <div className="cards_item">
      <div className="card">
        <img src={image} alt={brand} className="card_image" />
        <div className="card_content" />
        <div className="card_title">{brand}</div>
        <div className="card_detail">
          <p>Model: {model}</p>
          <p>Color: {color}</p>
          <p>Price: {price}</p>
          <p>Year: {year}</p>
          <button onClick={handleBuy} disabled={isSold}>
            {isSold ? "Sold" : "Buy"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Car;
