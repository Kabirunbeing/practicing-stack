import React, { useState, useEffect } from "react";
import { createOrder, fetchOrders } from "../api";

const OrderForm = () => {
  const [orders, setOrders] = useState([]);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Fetch all orders when the component mounts
  useEffect(() => {
    const getOrders = async () => {
      const ordersData = await fetchOrders();
      setOrders(ordersData);
    };
    getOrders();
  }, []);

  // Handle form submission to create a new order
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOrder = { product, quantity };
    const response = await createOrder(newOrder);
    console.log("Order created:", response);
    setOrders([...orders, response]);
    // Reset form fields after submission
    setProduct("");
    setQuantity(1);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Order</h2>
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Create Order
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-6">Existing Orders</h3>
      <ul className="mt-4 space-y-2">
        {orders.length > 0 ? (
          orders.map((order) => (
            <li key={order._id} className="p-2 border rounded-md shadow-sm">
              {order.product} - Quantity: {order.quantity}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No orders found</li>
        )}
      </ul>
    </div>
  );
};

export default OrderForm;
