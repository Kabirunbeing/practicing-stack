import React, { useState } from "react";
import { createProduct } from "../api";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");  // Add price state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, description, price };  // Include price in the new product object
    const response = await createProduct(newProduct);
    console.log("Product created:", response);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"  // Input for price
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}  // Update price state
        required
        className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;
