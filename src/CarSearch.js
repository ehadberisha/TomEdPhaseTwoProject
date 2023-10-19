import React, { useState, useEffect } from "react";
import CarSearch from "./CarSearch";
import CarList from "./CarList";
import Search from "./Search";
import PostForm from "./PostForm";

function CarSearcher() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/cars")
      .then((resp) => resp.json())
      .then((carArray) => {
        console.log(carArray);
        setCars(carArray);
      });
  }, []);
  console.log(cars);
  const carSearch = cars.filter((carObj) => {
    const brandMatch = carObj.brand
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const modelMatch = carObj.model
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return brandMatch || modelMatch;
  });
  const addCar = (car) => {
    setCars([...cars, car]); // Update the list of cars with the new car data
  };
  return (
    <div>
      <h1 className="car-search-container">Active Listings</h1>
      <PostForm onAddCar={addCar} />
      <Search setSearchTerm={setSearchTerm} />
      <CarList cars={carSearch} />
    </div>
  );
}

export default CarSearcher;
