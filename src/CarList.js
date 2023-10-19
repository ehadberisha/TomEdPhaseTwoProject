import React from "react";
import Car from "./Car";

function CarList({ cars, deleteCar }) {
  const renderCar = cars.map((carObj) => {
    return (
      <Car
        key={carObj.id}
        brand={carObj.brand}
        model={carObj.model}
        color={carObj.color}
        price={carObj.price}
        year={carObj.year}
        image={carObj.image}
        deleteCar={deleteCar}
      />
    );
  });

  return <ul className="cards">{renderCar}</ul>;
}

export default CarList;
