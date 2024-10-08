import React, { useState } from "react";
import { createProduct } from "../api";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, description };
    const response = await createProduct(newProduct);
    console.log("Product created:", response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;
