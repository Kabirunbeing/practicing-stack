import React from "react";
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import Products from "./components/Products";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <div className="App">
      <h1>API Integration</h1>

      {/* User Section */}
      <UserForm />
      <Users />

      {/* Product Section */}
      <ProductForm />
      <Products />
    </div>
  );
}

export default App;
