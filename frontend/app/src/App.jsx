import React from "react";
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import Products from "./components/Products";
import ProductForm from "./components/ProductForm";
import Orders from "./components/Order";
import Reviews from "./components/Review";
import OrderForm from "./components/OrderForm";
import ReviewForm from "./components/ReviewForm";

function App() {
  return (
    <div className="App">
      <h1>API Integration</h1>

      <UserForm />
      <Users />
      <ProductForm />
      <Products />
      <OrderForm/>
      <ReviewForm/>
    </div>
  );
}

export default App;
