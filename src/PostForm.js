import React, { useState } from "react";

function PostForm({ onAddCar }) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [year, setYear] = useState("");

  // const [formData, setFormData] = useState({
  //   brand: "",
  //   model: "",
  //   color: "",
  //   text: "",
  //   image: "",
  //   year: "",
  // }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });

  function handleSubmit(e) {
    e.preventDefault();
    let newCar = { brand, model, color, image, price, year };

    fetch("http://localhost:3001/cars", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newCar),
    })
      .then((res) => res.json())
      .then((car) => {
        console.log(car);
        onAddCar(car);
      });
  }
  // onAddCar(formData); // Pass the form data to the parent component
  // setFormData({
  //   brand: "",
  //   model: "",
  //   color: "",
  //   text: "",
  //   image: "",
  //   year: "",
  // });

  return (
    <div className="postformclass">
      <h2>List Your Car Here</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brandinput"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <label htmlFor="model">Model</label>
        <input
          type="text"
          id="modelinput"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />

        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="colorinput"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="priceinput"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="imageinput"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="yearinput"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default PostForm;
